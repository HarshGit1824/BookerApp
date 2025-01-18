"use client";
import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowDown10, Cross } from "lucide-react";

function AddBook() {
  const [bookValue, setBookValue] = useState("");
  const [authorValue, setAuthorValue] = useState("");
  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!bookValue.trim() || !authorValue.trim()) {
      return;
    }
    console.log(bookValue, authorValue);
    setBookValue("");
    setAuthorValue("");
  };
  return (
    <form className="max-w-96 mx-auto mb-10" onSubmit={handleFormSubmit}>
      <Input
        type="text"
        placeholder="Add a book"
        className="mb-1"
        onChange={(e) => setBookValue(e.target.value)}
        value={bookValue}
      />
      <Input
        type="text"
        placeholder="Add author info"
        className="mb-3"
        onChange={(e) => setAuthorValue(e.target.value)}
        value={authorValue}
      />
      <div className="flex gap-2">
        <Button type="submit">
          <Cross /> Add
        </Button>
        <Button type="submit" variant="secondary">
          <ArrowDown10 /> Sort
        </Button>
      </div>
    </form>
  );
}

export default AddBook;
