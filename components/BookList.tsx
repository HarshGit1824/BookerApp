import BookSingle from "@/components/BookSingle";
function BookList() {
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
      <BookSingle />
      <BookSingle />
      <BookSingle />
      <BookSingle />
    </div>
  );
  }
  export default BookList;