// import React, { Component } from "react";
// import Book from "./Book";
// import "./BookList.css";
// import BookContext from "../contex/BookContext";

// class BookList extends Component {
//   static contextType = BookContext;

//   render() {

//     let books = this.context;

//     return (
//       <section className="page-section bg-light" id="portfolio">
//         <div className="container">
//           <div className="text-center">
//             <h2 className="section-heading text-uppercase">BookFolio</h2>
//             <h3 className="section-subheading text-muted">
//               Lorem ipsum dolor sit amet consectetur.
//             </h3>
//           </div>
//           <div className="row">
//             {books.map((book, i) => {
//               return <Book book={book} key={i} />;
//             })}
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default BookList;

import React, { Component } from "react";
import Book from "./Book";
import "./BookList.css";
import { BookContext } from "../contex/BookContext";
import { ThemeContext } from "../contex/ThemeContext";


class BookList extends Component {
  render() {
    return (
 <ThemeContext.Consumer>{contextThem => (

   <BookContext.Consumer>
            {contextBook => {
               const { books } = contextBook;
               const { isDarkTheme, dark, light, changeTheme } = contextThem;
               const theme = isDarkTheme ? dark : light;
             return (
                <section className="page-section " id="portfolio" style={{background: theme.bg, color: theme.txt}}>
                  <div className="container">
                    <div className="text-center">
                      <h2 className="section-heading text-uppercase">
                        Book 
                      </h2>
                      <h3 className="section-subheading text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </h3>
                      <button type="botton" onClick={changeTheme} className="btn btn-info" style={{marginTop: "-70px"}}>Change theme</button>
                    </div>
                    <div className="row">
                      {books.map((book, i) => {
                        return <Book book={book} key={i} />;
                      })}   
                    </div>
                  </div>
                </section>
             );
             
            }}
          </BookContext.Consumer>

        )}

  </ThemeContext.Consumer>
       
    
    );
  }
}

export default BookList;
