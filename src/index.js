import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
//props
//array of names
//map - creats a new array from calling a function for every element
const books = [
  {
    title: 'The Russian (A Lance Spector Thriller Book 2)',
    author: 'Saul Herzog',
    img: 'https://m.media-amazon.com/images/I/71JfzXD9djL._SY342_.jpg',
  },
  {
    title: 'Memory Games for Adults',
    author: 'Keep Your Mind Young',
    img: 'https://m.media-amazon.com/images/I/71JfzXD9djL._SY342_.jpg',
  },
];

// const newBooks = books.map((book) => {
//   return <h1>{book}</h1>;
// });

const names = ['Monireh', 'Shirin', 'Fatima'];
//method one
// const newName = names.map((name) => {
//   return <h1>{name}</h1>;
// });

function BookList() {
  return (
    <section className='booklist'>
      {names.map((name) => {
        return <h1>{name}</h1>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
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
