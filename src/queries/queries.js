import { gql } from 'apollo-boost';
const getTeacherQuery = gql`
    {
        teachers{
            name
            family
            group
            age
            id
            
        }
    }
`

const getLessonsQuery = gql`
    {
        lessons{
            name
            group
            teacherId
            id
        }
    }
`
const addLessonMutation = gql`
    mutation($name:String!,$group:String!, $teacherId : ID!){
        addLesson(name: $name,group: $group,teacherId: $teacherId){
             name,
             group
        }
            
    }
    
`

const addTeacherMutation = gql`
    mutation($name:String!,$family:String!,$age:String!,$group:String!){
        addTeacher(name: $name,family: $family,age: $age,group: $group){
             name,
             family,
             age,
             group
        }
            
    }  
`

const deletTeacherMutation = gql`
mutation deleteRecord($teacherId : ID!) {
    deleteRecord(teacherId: $teacherId) {
        id
    }
}
`


export {getLessonsQuery,getTeacherQuery,addLessonMutation,addTeacherMutation,deletTeacherMutation};

/* const addTeacherMutation = gql`
    mutation($name:String!,$family:String!,$age:number!, $group : group!){
        addTeacher(name: $name,family:$family,age:age,group: $group){
             name
             family
        }
            
    }  
` */