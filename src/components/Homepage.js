import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);



export default class componentName extends Component {
    render() {
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <Typography variant="h4">HOME PAGE</Typography>
                    <br/>
                </ThemeProvider>
            </div>
        )
    }
}
