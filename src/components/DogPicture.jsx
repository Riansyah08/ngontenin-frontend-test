import React from "react";
import { Dog, AlertCircle } from "lucide-react";

const DogPicture = ({ imageUrl, isLoading, error }) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
      <div className="bg-blue-600 text-white p-4">
        <div className="flex items-center space-x-2">
          <Dog className="w-6 h-6" />
          <h2 className="text-xl font-bold">Dog Picture</h2>
        </div>
      </div>

      <div className="p-4">
        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
          {isLoading ? (
            <div className="flex flex-col items-center space-y-2">
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-600 text-sm">Loading cute dog...</p>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center space-y-2 p-4 text-center">
              <AlertCircle className="w-8 h-8 text-red-500" />
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          ) : imageUrl ? (
            <img
              src={imageUrl}
              alt="Random dog"
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error("Failed to load dog image");
              }}
            />
          ) : (
            <div className="flex flex-col items-center space-y-2 text-gray-500">
              <Dog className="w-12 h-12" />
              <p className="text-sm">No dog picture</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DogPicture;
