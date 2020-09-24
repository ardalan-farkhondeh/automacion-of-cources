import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {getLessonsQuery} from '../queries/queries';


import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);



class LessonList extends Component {
    render() {
        const data = this.props.data;
        let lessons;
        if(data.loading){
            
            lessons=<li >loading</li>
            
           
        }else{
            lessons = data.lessons.map(lesson =>
                
                <li key={lesson.id}>
                    <div>
                            <ThemeProvider theme={theme}>
                                <Typography variant="h5">
                                    Course :{lesson.name}
                                    <br/>
                                    Group: {lesson.group}
                                    <br/>
                                    Teacher id:{lesson.teacherId}
                                </Typography>
                                <br/>
                            </ThemeProvider>
                       
                    </div>
                </li>
            )
        }
        return (
            <div>
                <ul>
                    {lessons}
                </ul>
            </div>
        );
    }
}

export default graphql(getLessonsQuery)(LessonList);

/* 
                              Code :{lesson.id} 
 */