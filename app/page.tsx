"use client";

import { useEffect, useReducer } from "react";
import { booksReducer } from "@/lib/reducer";
import { LampDemo } from "@/components/ui/lamp";
import Header from "@/components/Header";
import AddBook from "@/components/AddBook";
import BookList from "@/components/BookList";

// Helper function to get books from localStorage
const getBooksFromLocalStorage = () => {
  const savedBooks = localStorage.getItem("books");
  return savedBooks ? JSON.parse(savedBooks) : [];
};
// Helper function to save books to localStorage
const saveBooksToLocalStorage = (books: any[]) => {
  localStorage.setItem("books", JSON.stringify(books));
};

function Home() {
  const [books, dispatch] = useReducer(booksReducer, [], () =>
    getBooksFromLocalStorage()
  );
  useEffect(() => {
    saveBooksToLocalStorage(books);
  }, [books]);
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
