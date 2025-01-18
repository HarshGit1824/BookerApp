interface Book {
  id: string;
  title: string;
  author: string;
  rating: number;
}

type Action =
  | { type: "add"; payload: { title: string; author: string } }
  | { type: "remove"; payload: string }
  | { type: "like"; payload: string }
  | { type: "dislike"; payload: string }
  | { type: "sort" };

export const booksReducer = (state: Book[], action: Action): Book[] => {
  switch (action.type) {
    case "add":
      const book: Book = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        author: action.payload.author,
        rating: 0,
      };
      return [book, ...state];
    case "remove":
      return state.filter((book) => book.id !== action.payload);
    case "like":
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, rating: book.rating + 1 }
          : book
      );
    case "dislike":
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, rating: book.rating - 1 }
          : book
      );
    case "sort":
      return [...state].sort((a, b) => b.rating - a.rating);
    default:
      return state;
  }
};
