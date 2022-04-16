import React from 'react';
import ReactDOM from 'react-dom'

//CSS
import './index.css';

function BookList(){
  return (
  <section className='booklist'> 
  <Book /> 
  <Book />
  <Book />
  <Book />
  <Book />
  <Book />
  <Book />
  </section>
  
  ) 
}

const Book = () => {
  return <article className= 'book'>
  <Image></Image> 
  <Title />
  <Author />
  
  </article>
}

const Image = () => <img src="https://m.media-amazon.com/images/I/8144Vic9C5L._AC_UY327_FMwebp_QL65_.jpg" alt="" />

const Title = () => <h1>Girl A </h1>
const Author = () =>  <h4 style={{color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Abigail Dean</h4>

//trying with arrow function with React.createElement method (could be messy if used many elements)
// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world')
// };


ReactDOM.render(<BookList/>, document.getElementById('root'))

