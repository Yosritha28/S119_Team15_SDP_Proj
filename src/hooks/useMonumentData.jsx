import { useState, useEffect } from "react";

export default function useMonumentData() {
  const [monuments, setMonuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Simulate API fetch, can be replaced with axios/fetch
        const data = [
          {
            name: "Taj Mahal",
            img: "/assets/tajmahal.jpg",
            location: "Agra, Uttar Pradesh",
            description: "Iconic marble mausoleum built by Mughal emperor Shah Jahan."
          },
          {
            name: "Sun Temple",
            img: "/assets/suntemple.jpeg",
            location: "Konark, Odisha",
            description: "13th-century temple shaped like a giant chariot."
          },
          // Add more monuments...
        ];
        setMonuments(data);
      } catch (err) {
        setError("Failed to fetch monument data.");
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return { monuments, loading, error };
}