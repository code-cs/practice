export const Book = (props) => {
  const { img, title, author, number } = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* way one */}
      {/* <span>#{number + 1}</span> */}
      {/* way two */}
      {`# ${number + 1}`}
    </article>
  );
};

export default Book;