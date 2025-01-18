"use client";

import Header from "@/components/Header";
import AddBook from "@/components/AddBook";
import BookList from "@/components/BookList";
function Home() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-2">
        <AddBook />
        <BookList />
      </main>
    </>
  );
}
export default Home;