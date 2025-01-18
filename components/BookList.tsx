import BookSingle from "@/components/BookSingle";

function BookList({ books, dispatch }: { books: any[]; dispatch: Function }) {
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
      {books.map((book) => (
        <BookSingle key={book.title} book={book} dispatch={dispatch} />
      ))}
    </div>
  );
}


export default BookList;
