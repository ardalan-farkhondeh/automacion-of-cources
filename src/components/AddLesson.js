import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';


import { getTeacherQuery,addLessonMutation,getLessonsQuery } from '../queries/queries';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';




const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
 class AddLesson extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            group:'',
            teacherId:''
        }
    
        
    }
    
    onCahnge = e =>{
        this.setState({
            [e.target.name]: e.target.value,

        })

    }
  
    submitHandler = e =>{
        e.preventDefault();
        this.props.addLessonMutation({
            variables:{
                name:this.state.name,
                group:this.state.group,
                teacherId:this.state.teacherId

            },
            refetchQueries : [{query:getLessonsQuery}]
        })

    }
    render(){
        const data = this.props.getTeacherQuery;
        let teachers;
        if(data.loading){
            teachers =<option>loading</option>
        }else{
            teachers = data.teachers.map(teacher =>
                <option value={teacher.id} key={teacher.id}>
                    {teacher.name}
                </option>)
        }
        return (
            <div>
                <form onSubmit={this.submitHandler}> 
                 <div>
                    <FormControl variant="outlined"  required>
                        <InputLabel htmlFor="coomponent-outlined" >Name</InputLabel>
                        <OutlinedInput id="component-outlined"  label="Name" type="text" name="name" onChange={this.onCahnge} />
                    </FormControl> 
                 </div>
                 <br/>
                 <div>
                    <FormControl variant="outlined"  required>
                        <InputLabel htmlFor="coomponent-outlined" >Group</InputLabel>
                        <OutlinedInput id="component-outlined"  label="Name" type="text" name="group" onChange={this.onCahnge} />
                    </FormControl> 
                 </div>
                 <br/>
                 <div>
                    <FormControl className={useStyles.formControl}>
                     <InputLabel id="demo-mutiple-name-label">Teachers</InputLabel>
                        <Select
                            name="teacherId"onChange={this.onCahnge} required>
                            <option  value="">Please select</option>
                            {teachers}
                        </Select>
                    </FormControl>
                 </div>
                 <br/>
                 <button >Insert</button>
                 
                 <br/>
                 <br/>
                </form>
            </div>
            
        )
    }
}

export default compose(
    graphql(getTeacherQuery,{name:"getTeacherQuery"}),
    graphql(addLessonMutation,{name:"addLessonMutation"})
)(AddLesson);

/* 
<label>Teacher</label>
<select  name="teacherId"onChange={this.onCahnge} required>
    <option  value="">Please select</option>
    {teachers}

</select >  */