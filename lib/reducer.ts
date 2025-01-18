export const booksReducer = (state: Book[], action: Action): Book[] => {
  switch (action.type) {
    case "add":
      console.log("adding book");
      const book: Book = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        author: action.payload.author,
        rating: 0,
      };
      return [book, ...state];
    case "remove":
      console.log("removing book");

      return state.filter((book) => book.id !== action.payload);
    case "like":
      console.log("liking book");

      return state.map((book) =>
        book.id === action.payload ? { ...book, rating: book.rating + 1 } : book
      );
    case "dislike":
      return state.map((book) =>
        book.id === action.payload ? { ...book, rating: book.rating - 1 } : book
      );
    case "sort":
      console.log("sorting books");
      return [...state].sort((a, b) => b.rating - a.rating);
    default:
      return state;
  }
};
