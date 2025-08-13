import { useState, useCallback } from "react";

const useDog = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDogImage = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");

      if (!response.ok) {
        throw new Error("Failed to fetch dog image");
      }

      const data = await response.json();

      if (data.status === "success" && data.message) {
        setImageUrl(data.message);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to load dog image";
      setError(errorMessage);
      console.error("Error fetching dog image:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearDogImage = useCallback(() => {
    setImageUrl(null);
    setError(null);
  }, []);

  return {
    imageUrl,
    isLoading,
    error,
    fetchDogImage,
    clearDogImage,
  };
};

export default useDog;
