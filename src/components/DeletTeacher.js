import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';


import { getTeacherQuery,addTeacherMutation,deletTeacherMutation } from '../queries/queries';





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
            },
            refetchQueries : [{query:getTeacherQuery}]
        })

    }
    render(){
        return (
            <div>
                <form onSubmit={this.submitHandler}> 
                 
                    <FormControl variant="outlined"  required>
                        <InputLabel htmlFor="coomponent-outlined" >Group</InputLabel>
                        <OutlinedInput id="component-outlined"  label="group" type="id" name="group" onChange={this.onCahnge} />
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