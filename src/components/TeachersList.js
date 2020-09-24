import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getTeacherQuery} from '../queries/queries';


import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);



class TeacherList extends Component {
    render() {
        const data = this.props.data;
        let teachers;
        if(data.loading){
            
            teachers=<li >loading</li>
            
           
        }else{
            teachers = data.teachers.map(teacher =>
                
                <li key={teacher.id}>
                    <div>
                            <ThemeProvider theme={theme}>
                                <Typography variant="h5">Teacher :{teacher.name} {teacher.family}
                                    <br/>
                                    ID :{teacher.id}
                                    <br/>
                                    age :{teacher.age}
                                    <br/>
                                    group :{teacher.group}
                                </Typography>
                                <br/>
                            </ThemeProvider>
                       
                    </div>
                </li>)
        }
        return (
            <div>
                <ul>
                    {teachers}
                </ul>
            </div>
        );
    }
}

export default graphql(getTeacherQuery)(TeacherList);

/* 
                              Code :{lesson.id} 
 */