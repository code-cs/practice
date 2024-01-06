import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
//props
//array of names
//map - creats a new array from calling a function for every element
//in the map the second parameter is index
// spread operator ...example is just a copy of the array or object ..
const books = [
  {
    title: 'The Russian (A Lance Spector Thriller Book 2)',
    author: 'Saul Herzog',
    img: 'https://m.media-amazon.com/images/I/71JfzXD9djL._SY342_.jpg',
    id: 1,
  },
  {
    title: 'Memory Games for Adults',
    author: 'Keep Your Mind Young',
    img: 'https://m.media-amazon.com/images/I/71JfzXD9djL._SY342_.jpg',
    id: 2,
  },
];

function BookList() {
  return (
    <>
      <EventExample />
      <section className='booklist'>
        {books.map((book) => {
          return <Book {...book} key={book.id} />
        })}
      </section>
    </>
  );
};

//we need an element, an event and a refrence to the function (call back function)
const EventExample = () => {
  const handleFormInput = () => {
    console.log('handle form input')
  }
  const handleButtonClick = () => {
    alert('handle button click')
  };

  return (
    <section>
      <form>
        <h2>Typical form</h2>
        <input type='text' name='example' onChange={handleFormInput} style={{ margin: '1rem 0' }} />
        <button onClick={handleButtonClick}>Click me</button>
      </form>
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
