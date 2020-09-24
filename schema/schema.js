const Teacher =require('../models/teacher');
const Lesson =require('../models/lesson');
const graphql =require("graphql");
const lod =require("lodash");
const lesson = require('../models/lesson');

const{
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;
/* 
const lessons = [
    {id: "1",name:"GraphQL", group:"Front",teachersId:"1"},
    {id: "2",name:"React", group:"Front",teachersId:"1"},
    {id: "3",name:"Express", group:"back",teachersId:"2"}
]
const teachers = [
    {id: "1",name:"frank", age:"33"},
    {id: "2",name:"jack", age:"29"},
    {id: "3",name:"ali", age:"34"}
]
 */
const LessonType = new GraphQLObjectType({
    name : 'lesson',
    fields:() =>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        group:{type:GraphQLString},
        teacherId:{type :GraphQLString}
    })
})
/* 
            resolve(parent,args){   
                return teacher.findById(parent.teacherId) ;             
                                 return lod.find(teachers,{id:parent.teachersId})
 */             

const TeacherType = new GraphQLObjectType({
    name : 'teacher',
    fields:() =>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        family:{type:GraphQLString},
        age:{type:GraphQLInt},
        group:{type:GraphQLString},
        lessons:{
            type:new GraphQLList(LessonType),
            resolve(parent,args){
                return Lesson.find({teacherId:parent.id});
/*                 return lod.filter(lessons,{teachersId:parent.id})
 */             }
        }
    })
})


const RootQuery = new GraphQLObjectType({
    name :'RootQueryType',
    fields:{
        lesson:{
            type : LessonType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return Lesson.findById(args.id);
/*                return lod.find(lessons,{id:args.id})
 */            }
        },
        teacher:{
            type : TeacherType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return Teacher.findById(args.id)
/*                return lod.find(teachers,{id:args.id})
 */            }
        },
        lessons:{
            type : new GraphQLList(LessonType),
            resolve(){
                return Lesson.find({});
/*                 return lessons
 */            }
        },
        teachers: {
            type : new GraphQLList(TeacherType),
            resolve(){
                return Teacher.find({});
/*                     return teachers
 */            }
        }
    }
});
    



const Mutation = new GraphQLObjectType({
    name : 'Mutation',
    fields:{
        addTeacher :{
            type: TeacherType,
            args:{
                name: {type :new  GraphQLNonNull(GraphQLString)},
                family: {type :new  GraphQLNonNull(GraphQLString)},
                age:{type:new GraphQLNonNull(GraphQLString)},
                group: {type :new  GraphQLNonNull(GraphQLString)} 
 
            },
            resolve(parent,args){
                let teacher = new Teacher({  
                name: args.name,
                family: args.family,
                age:args.age,
                group: args.group
                });
                return teacher.save();
            }
        },
        addLesson: {
            type: LessonType,
            args:{
                name: {type : new GraphQLNonNull(GraphQLString)},
                group: {type: new GraphQLNonNull(GraphQLString)},
                teacherId : {type : new GraphQLNonNull(GraphQLID)}
            },
            resolve(parent,args){
                let lesson = new Lesson({  
                    name: args.name,
                    group: args.group,
                    teacherId:args.teacherId,
                })
                return lesson.save();
            }
        }

    }
 })


module.exports = new GraphQLSchema({
    query : RootQuery,
    mutation : Mutation
})     
