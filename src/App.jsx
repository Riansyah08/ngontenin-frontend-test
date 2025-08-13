import React, { useEffect } from "react";
import ControlPanel from "./components/ControlPanel";
import BooksList from "./components/BooksList";
import DogPicture from "./components/DogPicture";
import useBooks from "./hooks/useBooks";
import useDog from "./hooks/useDog";

function App() {
  const {
    books,
    isLoading: isLoadingBooks,
    error: booksError,
    fetchBooks,
    clearBooks,
  } = useBooks();

  const {
    imageUrl: dogImageUrl,
    isLoading: isLoadingDog,
    error: dogError,
    fetchDogImage,
    clearDogImage,
  } = useDog();

  // Load initial data when component mounts
  useEffect(() => {
    fetchBooks();
    fetchDogImage();
  }, [fetchBooks, fetchDogImage]);

  const handleRefreshDogs = () => {
    fetchDogImage();
  };

  const handleRefreshBooks = () => {
    fetchBooks();
  };

  const handleRefreshBoth = () => {
    fetchBooks();
    fetchDogImage();
  };

  const handleEmptyAll = () => {
    clearBooks();
    clearDogImage();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 mt-30">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white border-2 border-gray-800 p-4">
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            React Frontend Test: Books & Dog Viewer
          </h1>
        </div>

        {/* Controls */}
        <ControlPanel
          onRefreshDogs={handleRefreshDogs}
          onRefreshBooks={handleRefreshBooks}
          onRefreshBoth={handleRefreshBoth}
          onEmptyAll={handleEmptyAll}
          isLoadingDogs={isLoadingDog}
          isLoadingBooks={isLoadingBooks}
        />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Books Section */}
          <div className="w-full">
            <BooksList
              books={books}
              isLoading={isLoadingBooks}
              error={booksError}
            />
          </div>

          {/* Dog Picture Section */}
          <div className="w-full">
            <DogPicture
              imageUrl={dogImageUrl}
              isLoading={isLoadingDog}
              error={dogError}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 text-sm py-4">
          <p>
            Ngontenin FrontEnd Test
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
