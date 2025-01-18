"use client";
import {  FormEvent, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowDown10, Cross } from "lucide-react";

// Reducer function to handle state updates
const bookReducer = (state: any[], action: { type: string; payload?: any }) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "sort":
      return [...state].sort((a, b) => a.title.localeCompare(b.title));
    default:
      return state;
  }
};

function AddBook({ dispatch }: { dispatch: Function }) {
  const inputBook = useRef<HTMLInputElement>(null);
  const inputAuthor = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const currBook = inputBook.current?.value.trim();
    const currAuthor = inputAuthor.current?.value.trim();
    if (!currBook || !currAuthor) return;

    dispatch({
      type: "add",
      payload: { title: currBook, author: currAuthor },
    });

    inputBook.current!.value = "";
    inputAuthor.current!.value = "";
  };

  const handleSort = () => {
    dispatch({ type: "sort" });
  };

  return (
    <div>
      <form className="max-w-96 mx-auto mb-10" onSubmit={handleFormSubmit}>
        <Input
          type="text"
          placeholder="Add a book"
          className="mb-1 p-6"
          ref={inputBook}
        />
        <Input
          type="text"
          placeholder="Add author info"
          className="mb-3 p-6"
          ref={inputAuthor}
        />
        <div className="flex gap-2">
          <Button type="submit">
            <Cross /> Add
          </Button>
          <Button variant="secondary" type="button" onClick={handleSort}>
            <ArrowDown10 /> Sort
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
