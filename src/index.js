import React from 'react';
import ReactDOM from 'react-dom/client';

import { Person } from './Person';

function BookList() {
  return <section>
    <Book />
  </section>;
}

const Book = () => {
  return <article>
    <Image />
    <Title />
    <Author />
  </article>;
};

const Image = () => <img src='https://m.media-amazon.com/images/I/81zDai1qKCL._SY342_.jpg' />;
const Title = () => <h2>Just Another Missing Person</h2>;
const Author = () => {
  return <h4>Gillian McAllister</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
