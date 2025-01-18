"use client";

import { initialBooks } from "@/lib/sampleData";
import { useReducer } from "react";
import { booksReducer } from "@/lib/reducer";
import { LampDemo } from "@/components/ui/lamp";
import Header from "@/components/Header";
import AddBook from "@/components/AddBook";
import BookList from "@/components/BookList";

function Home() {
  const [books, dispatch] = useReducer(booksReducer, initialBooks as Book[]);

  return (
    <>
      <Header />
      <LampDemo title="Booker &mdash; rank books to read." />
      <hr className="mb-10" />
      <main className="max-w-7xl mx-auto px-2 text-2xl">
        <AddBook dispatch={dispatch} />
        <BookList books={books} dispatch={dispatch} />
      </main>
    </>
  );
}
export default Home;
