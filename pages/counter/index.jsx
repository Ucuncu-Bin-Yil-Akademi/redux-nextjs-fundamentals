import { useState, useEffect } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("Sayfa yüklendi");
  }, []);

  useEffect(() => {
    alert("Counter değişti");
  }, [counter]);

  function arttir() {
    setCounter(counter + 1);
  }
  return (
    <>
      <h2>Counter Page</h2>
      <b>Sayaç: {counter}</b>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => {
          arttir();
        }}
      >
        Artır
      </button>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Azalt
      </button>
    </>
  );
}
