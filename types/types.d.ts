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