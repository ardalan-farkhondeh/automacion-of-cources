import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';


import { getTeacherQuery,addTeacherMutation } from '../queries/queries';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
 



const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
 class AddTeacher extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            family:'',
            age: '',
            group:''
        }
    
        
    }
    
    onCahnge = e =>{
        this.setState({
            [e.target.name]: e.target.value,

        })

    }
  
    submitHandler = e =>{
        e.preventDefault();
        this.props.addTeacherMutation({
            variables:{
                name:this.state.name,
                family:this.state.family,
                age:this.state.age,
                group:this.state.group



            },
            refetchQueries : [{query:getTeacherQuery}]
        })

    }
    render(){
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
                        <InputLabel htmlFor="coomponent-outlined" >Family</InputLabel>
                        <OutlinedInput id="component-outlined"  label="Name" type="text" name="family" onChange={this.onCahnge} />
                    </FormControl> 
                </div>
                <br/>
                <div>
                    <FormControl variant="outlined"  required>
                        <InputLabel htmlFor="coomponent-outlined" >age</InputLabel>
                        <OutlinedInput id="component-outlined"  label="age" type="number" name="age" onChange={this.onCahnge} />
                    </FormControl> 
                    </div>
                <br/>
                <div>
                    <FormControl variant="outlined"  required>
                        <InputLabel htmlFor="coomponent-outlined" >Group</InputLabel>
                        <OutlinedInput id="component-outlined"  label="group" type="text" name="group" onChange={this.onCahnge} />
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
    graphql(addTeacherMutation,{name:"addTeacherMutation"})
)(AddTeacher);

/* 
<label>Teacher</label>
<select  name="teacherId"onChange={this.onCahnge} required>
    <option  value="">Please select</option>
    {teachers}

</select >  */


/* 
<div>
<FormControl variant="outlined"  >
    <InputLabel htmlFor="coomponent-outlined" >Family</InputLabel>
    <OutlinedInput id="component-outlined"  label="family" type="text" name="family" onChange={this.onCahnge} />
</FormControl> 
</div>
<br/>
<div>
<FormControl variant="outlined"  >
    <InputLabel htmlFor="coomponent-outlined" >age</InputLabel>
    <OutlinedInput id="component-outlined"  label="age" type="number" name="age" onChange={this.onCahnge} />
</FormControl> 
</div>
<br/>
<div>
<FormControl variant="outlined"  >
    <InputLabel htmlFor="coomponent-outlined" >Group</InputLabel>
    <OutlinedInput id="component-outlined"  label="group" type="text" name="group" onChange={this.onCahnge} />
</FormControl> 
</div>
<br/> */