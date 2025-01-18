import BookSingle from "@/components/BookSingle";


interface BookListProps {
  books: Book[];
  dispatch: React.Dispatch<Action>;
}

function BookList({ books, dispatch }: BookListProps) {
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
      {books.map((book) => (
        <BookSingle key={book.id} book={book} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default BookList;
