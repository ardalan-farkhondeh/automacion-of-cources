import React from 'react';

import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ShowLessons from './ShowLessons';
import ShowTeachers from './ShowTeachers';
import ShowAddLesson from './ShowAddLesson';
import ShowAddTeacher from './ShowAddTeacher';
import HOMEPAGE from './Homepage';


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="HOMEPAGE"{...a11yProps(0)}>
            </Tab>
            <Tab label="Teachers"{...a11yProps(1)} >
            </Tab>
            <Tab label="Cources"{...a11yProps(2)} >              
            </Tab>
            <Tab label="Add Lesson"{...a11yProps(3)} > 
            </Tab>
            <Tab label="Add Teacher"{...a11yProps(4)} > 
            </Tab>
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}> 
          homepage
          <HOMEPAGE/>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <ShowTeachers/>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <ShowLessons/>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <ShowAddLesson/>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <ShowAddTeacher/>
        </TabPanel>
    </div>
  );
}
