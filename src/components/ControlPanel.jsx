import React from "react";
import { RefreshCw, Dog, BookOpen, RotateCcw, Trash2 } from "lucide-react";

const ControlPanel = ({
  onRefreshDogs,
  onRefreshBooks,
  onRefreshBoth,
  onEmptyAll,
  isLoadingDogs,
  isLoadingBooks,
}) => {
  return (
    <div className="bg-white border-2 border-gray-800 p-4">
      <div className="flex flex-wrap gap-3">
        <h2 className="text-lg font-bold mb-4 text-gray-800 mt-5">Controls:</h2>
        <button
          onClick={onRefreshDogs}
          disabled={isLoadingDogs}
          className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          {isLoadingDogs ? (
            <RefreshCw className="w-4 h-4 animate-spin" />
          ) : (
            <Dog className="w-4 h-4" />
          )}
          <span>Refresh Dogs</span>
        </button>
        <button
          onClick={onRefreshBooks}
          disabled={isLoadingBooks}
          className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          {isLoadingBooks ? (
            <RefreshCw className="w-4 h-4 animate-spin" />
          ) : (
            <BookOpen className="w-4 h-4" />
          )}
          <span>Refresh Books</span>
        </button>
        <button
          onClick={onRefreshBoth}
          disabled={isLoadingDogs || isLoadingBooks}
          className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          {isLoadingDogs || isLoadingBooks ? (
            <RefreshCw className="w-4 h-4 animate-spin" />
          ) : (
            <RotateCcw className="w-4 h-4" />
          )}
          <span>Refresh Both</span>
        </button>
        <button
          onClick={onEmptyAll}
          className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          <span>Empty All</span>
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
