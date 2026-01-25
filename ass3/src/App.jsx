import { useState } from "react";
import "./App.css";

function App() {

  const ramzanData = [
    { day: 1, sehri: "05:47 AM", iftar: "06:28 PM" },
    { day: 2, sehri: "05:47 AM", iftar: "06:29 PM" },
    { day: 3, sehri: "05:46 AM", iftar: "06:29 PM" },
    { day: 4, sehri: "05:45 AM", iftar: "06:30 PM" },
    { day: 5, sehri: "05:44 AM", iftar: "06:30 PM" },
    { day: 6, sehri: "05:44 AM", iftar: "06:31 PM" },
    { day: 7, sehri: "05:43 AM", iftar: "06:32 PM" },
    { day: 8, sehri: "05:42 AM", iftar: "06:32 PM" },
    { day: 9, sehri: "05:41 AM", iftar: "06:33 PM" },
    { day: 10, sehri: "05:40 AM", iftar: "06:33 PM" },

    { day: 11, sehri: "05:40 AM", iftar: "06:34 PM" },
    { day: 12, sehri: "05:39 AM", iftar: "06:34 PM" },
    { day: 13, sehri: "05:38 AM", iftar: "06:35 PM" },
    { day: 14, sehri: "05:37 AM", iftar: "06:35 PM" },
    { day: 15, sehri: "05:36 AM", iftar: "06:36 PM" },
    { day: 16, sehri: "05:35 AM", iftar: "06:36 PM" },
    { day: 17, sehri: "05:34 AM", iftar: "06:37 PM" },
    { day: 18, sehri: "05:33 AM", iftar: "06:37 PM" },
    { day: 19, sehri: "05:32 AM", iftar: "06:38 PM" },
    { day: 20, sehri: "05:31 AM", iftar: "06:38 PM" },

    { day: 21, sehri: "05:30 AM", iftar: "06:39 PM" },
    { day: 22, sehri: "05:29 AM", iftar: "06:39 PM" },
    { day: 23, sehri: "05:28 AM", iftar: "06:40 PM" },
    { day: 24, sehri: "05:27 AM", iftar: "06:40 PM" },
    { day: 25, sehri: "05:26 AM", iftar: "06:41 PM" },
    { day: 26, sehri: "05:25 AM", iftar: "06:41 PM" },
    { day: 27, sehri: "05:24 AM", iftar: "06:41 PM" },
    { day: 28, sehri: "05:23 AM", iftar: "06:42 PM" },
    { day: 29, sehri: "05:22 AM", iftar: "06:42 PM" },
    { day: 30, sehri: "05:21 AM", iftar: "06:43 PM" },
  ];

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = (e) => {
    const text = e.target.value.toLowerCase();
    setInput(text);

    const day = parseInt(text);
    if (!day || day < 1 || day > 30) {
      setResult("");
      return;
    }

    const found = ramzanData.find(d => d.day === day);

    if (text.includes("sehri")) {
      setResult(`Rozah ${day} – Sehri: ${found.sehri}`);
    } 
    else if (text.includes("iftar")) {
      setResult(`Rozah ${day} – Iftar: ${found.iftar}`);
    } 
    else {
      setResult("");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>رمضان 2026 — کراچی</h2>

        <input
          className="search"
          placeholder="مثال: 1 sehri یا 25 iftar"
          value={input}
          onChange={handleSearch}
        />

        {result && <p className="result">{result}</p>}
      </div>
    </div>
  );
}

export default App;
