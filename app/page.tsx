"use client";

import { useState } from "react";
import { LampDemo } from "@/components/ui/lamp";
import Header from "@/components/Header";
import AddBook from "@/components/AddBook";
import BookList from "@/components/BookList";

interface Book {
  id: number;
  title: string;
  author: string;
  rating: number;
}
function Home() {
  const [books, setBooks] = useState<Book[]>([
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      rating: 0,
    },
    {
      id: 2,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      rating: 33,
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      rating: 0,
    },
  ]);

  console.log(books);
  return (
    <>
      <Header />
      <LampDemo title="Booker &mdash; rank books to read." />
      <hr className="mb-10" />
      <main className="max-w-7xl mx-auto px-2 text-2xl">
        <AddBook />
        <BookList />
      </main>
    </>
  );
}
export default Home;
