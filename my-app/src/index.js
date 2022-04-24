import React from 'react';
import ReactDOM from 'react-dom'

//CSS
import './index.css';

//setup vars
const firstBook = {
  img: 'https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY327_FMwebp_QL65_.jpg',
  title: 'Girl A',
  author: 'Abigail Dean'
}

const secondBook = {
  img: 'https://m.media-amazon.com/images/I/91+5X0bukSL._AC_UY327_FMwebp_QL65_.jpg',
  title: 'A Gentleman in Moscow',
  author: 'Amor Towles'
}


function BookList(){
  return (
  <section className='booklist'> 
  <Book 
    img={firstBook.img} 
    title={firstBook.title} 
    author={firstBook.author}
  /> 
  <Book 
    img={secondBook.img} 
    title={secondBook.title} 
    author={secondBook.author} />  
 
  </section>
  
  ) 
}

const Book = ({img, title, author}) => {
  //const {img, title, author}= props

  return(
     <article className= 'book'>
  <img src={img} alt="" />
  <h1>{title}</h1>
  <h4>{author}</h4>

  </article>
  )
}
 

//trying with arrow function with React.createElement method (could be messy if used many elements)
// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world')
// };


ReactDOM.render(<BookList/>, document.getElementById('root'))

