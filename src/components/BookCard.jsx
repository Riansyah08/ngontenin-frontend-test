import React, { useState } from "react";
import { ChevronDown, ChevronRight, Book } from "lucide-react";

const BookCard = ({ book }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg mb-3 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div
        className="p-4 bg-white cursor-pointer hover:bg-gray-50 transition-colors flex items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-3">
          <Book className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-gray-900 truncate text-sm">
              {book.title}
            </h3>
            <p className="text-gray-600 text-sm">by {book.author}</p>
          </div>
        </div>
        <div className="flex-shrink-0 ml-2">
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="px-4 pb-4 bg-gray-50 border-t border-gray-200">
          <div className="space-y-3 pt-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <span className="font-medium text-gray-700">Genre:</span>
                <span className="ml-2 text-gray-600">{book.genre}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Published:</span>
                <span className="ml-2 text-gray-600">{book.published}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="font-medium text-gray-700">Publisher:</span>
                <span className="ml-2 text-gray-600">{book.publisher}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="font-medium text-gray-700">ISBN:</span>
                <span className="ml-2 text-gray-600 font-mono text-xs">
                  {book.isbn}
                </span>
              </div>
            </div>

            <div>
              <span className="font-medium text-gray-700 block mb-1">
                Description:
              </span>
              <p className="text-gray-600 text-sm leading-relaxed">
                {book.description}
              </p>
            </div>

            {book.image && (
              <div className="flex justify-center">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-16 h-20 object-cover rounded border border-gray-200"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookCard;
