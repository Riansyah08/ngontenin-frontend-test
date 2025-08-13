import { useState, useCallback } from "react";

const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBooks = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://fakerapi.it/api/v2/books?_quantity=4"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }

      const data = await response.json();

      if (data.status === "OK" && data.data) {
        setBooks(data.data);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to load books";
      setError(errorMessage);
      console.error("Error fetching books:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearBooks = useCallback(() => {
    setBooks([]);
    setError(null);
  }, []);

  return {
    books,
    isLoading,
    error,
    fetchBooks,
    clearBooks,
  };
};

export default useBooks;
