import React, { Component } from 'react';
import ApolliClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { onError } from 'apollo-link-error'


import TABS from './components/Tabs';


const client = new ApolliClient({
  uri:'http://localhost:4000/graphql'
})

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message))
})
/* 
new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, restLink, httpLink]),
})
 */
class App extends Component {
  render() {
    return (
     <ApolloProvider client={client}>
        <div>
            <TABS/>
        </div>
      </ApolloProvider>
    
    );
  }
}

export default App;


/* 
<Router>
<ThemeProvider theme={theme}>
  <NavLink to="/homepage"><Typography variant="h4">HOMEPAGE</Typography></NavLink> 
  <br/>
</ThemeProvider>
<ThemeProvider theme={theme}>
  <NavLink to="/ShowTeachers"><Typography variant="h4">TEACHERS</Typography></NavLink> 
  <br/>
</ThemeProvider>
<ThemeProvider theme={theme}>
  <NavLink to="/ShowLessons"><Typography variant="h4">COURCES</Typography></NavLink> 
  <br/>
</ThemeProvider>
<ThemeProvider theme={theme}>
  <NavLink to="/ShowAddLesson"><Typography variant="h4">Add Lesson</Typography></NavLink> 
  <br/>
</ThemeProvider>

<Route exact path="/homepage" component={HOMEPAGE} />
<Route exact path="/ShowTeachers" component={ShowTeachers} />
<Route exact path="/ShowLessons" component={ShowLessons} />
<Route exact path="/ShowAddLesson" component={ShowAddLesson} />


</Router> */
