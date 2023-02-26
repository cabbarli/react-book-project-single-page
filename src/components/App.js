import React, { Component } from 'react';
import BookList from './BookList';
import BookContextProvider from '../contex/BookContext';
import ThemContextProvider from '../contex/ThemeContext';




class App extends Component {

  render() {
    return (
          <ThemContextProvider>
              <BookContextProvider>
                  <BookList/>
              </BookContextProvider>
          </ThemContextProvider>     
    )
  }
}


export default App;