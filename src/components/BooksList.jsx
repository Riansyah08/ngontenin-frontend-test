import React from "react";
import { BookOpen, AlertCircle } from "lucide-react";
import BookCard from "./BookCard";

const BooksList = ({ books, isLoading, error }) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
      <div className="bg-green-600 text-white p-4">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-6 h-6" />
          <h2 className="text-xl font-bold">Books</h2>
          <span className="bg-green-500 px-2 py-1 rounded-full text-xs font-medium">
            {books.length}/4
          </span>
        </div>
      </div>

      <div className="p-4">
        {isLoading ? (
          <div className="flex flex-col items-center space-y-4 py-8">
            <div className="w-8 h-8 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-600 text-sm">Loading books...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center space-y-2 py-8 text-center">
            <AlertCircle className="w-8 h-8 text-red-500" />
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        ) : books.length === 0 ? (
          <div className="flex flex-col items-center space-y-2 py-8 text-gray-500">
            <BookOpen className="w-12 h-12" />
            <p className="text-sm">No books to display</p>
            <p className="text-xs text-gray-400">
              Click "Refresh Books" to load some!
            </p>
          </div>
        ) : (
          <div className="space-y-0">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BooksList;
