import { useState } from "react";
import "./App.css";

function App() {

  const ramzanData = [
    { day: 1, date: "19", week: "Thu", sehri: "05:47 AM", iftar: "06:28 PM" },
    { day: 2, date: "20", week: "Fri", sehri: "05:47 AM", iftar: "06:29 PM" },
    { day: 3, date: "21", week: "Sat", sehri: "05:46 AM", iftar: "06:29 PM" },
    { day: 4, date: "22", week: "Sun", sehri: "05:45 AM", iftar: "06:30 PM" },
    { day: 5, date: "23", week: "Mon", sehri: "05:44 AM", iftar: "06:30 PM" },
    { day: 6, date: "24", week: "Tue", sehri: "05:44 AM", iftar: "06:31 PM" },
    { day: 7, date: "25", week: "Wed", sehri: "05:43 AM", iftar: "06:32 PM" },
    { day: 8, date: "26", week: "Thu", sehri: "05:42 AM", iftar: "06:32 PM" },
    { day: 9, date: "27", week: "Fri", sehri: "05:41 AM", iftar: "06:33 PM" },
    { day: 10, date: "28", week: "Sat", sehri: "05:40 AM", iftar: "06:33 PM" },

    { day: 11, date: "01", week: "Sun", sehri: "05:40 AM", iftar: "06:34 PM" },
    { day: 12, date: "02", week: "Mon", sehri: "05:39 AM", iftar: "06:34 PM" },
    { day: 13, date: "03", week: "Tue", sehri: "05:38 AM", iftar: "06:35 PM" },
    { day: 14, date: "04", week: "Wed", sehri: "05:37 AM", iftar: "06:35 PM" },
    { day: 15, date: "05", week: "Thu", sehri: "05:36 AM", iftar: "06:36 PM" },
    { day: 16, date: "06", week: "Fri", sehri: "05:35 AM", iftar: "06:36 PM" },
    { day: 17, date: "07", week: "Sat", sehri: "05:34 AM", iftar: "06:37 PM" },
    { day: 18, date: "08", week: "Sun", sehri: "05:33 AM", iftar: "06:37 PM" },
    { day: 19, date: "09", week: "Mon", sehri: "05:32 AM", iftar: "06:38 PM" },
    { day: 20, date: "10", week: "Tue", sehri: "05:31 AM", iftar: "06:38 PM" },

    { day: 21, date: "11", week: "Wed", sehri: "05:30 AM", iftar: "06:39 PM" },
    { day: 22, date: "12", week: "Thu", sehri: "05:29 AM", iftar: "06:39 PM" },
    { day: 23, date: "13", week: "Fri", sehri: "05:28 AM", iftar: "06:40 PM" },
    { day: 24, date: "14", week: "Sat", sehri: "05:27 AM", iftar: "06:40 PM" },
    { day: 25, date: "15", week: "Sun", sehri: "05:26 AM", iftar: "06:41 PM" },
    { day: 26, date: "16", week: "Mon", sehri: "05:25 AM", iftar: "06:41 PM" },
    { day: 27, date: "17", week: "Tue", sehri: "05:24 AM", iftar: "06:41 PM" },
    { day: 28, date: "18", week: "Wed", sehri: "05:23 AM", iftar: "06:42 PM" },
    { day: 29, date: "19", week: "Thu", sehri: "05:22 AM", iftar: "06:42 PM" },
    { day: 30, date: "20", week: "Fri", sehri: "05:21 AM", iftar: "06:43 PM" },
  ];

  const [input, setInput] = useState("");
  const [found, setFound] = useState(null);

  const handleSearch = (e) => {
    const text = e.target.value.toLowerCase();
    setInput(text);

    const dayNumber = parseInt(text);
    if (!dayNumber || dayNumber < 1 || dayNumber > 30) {
      setFound(null);
      return;
    }

    const data = ramzanData.find(d => d.day === dayNumber);
    setFound(data);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>رمضان 2026 — کراچی</h2>

        <input
          className="search"
          placeholder="رمضان 2026 — کراچی"
          value={input}
          onChange={handleSearch}
        />

        {found && (
          <div className="result">
            <p><b>Rozah:</b> {found.day}</p>
            <p><b>Date:</b> {found.date}</p>
            <p><b>Day:</b> {found.week}</p>
            <p><b>Sehri:</b> {found.sehri}</p>
            <p><b>Iftar:</b> {found.iftar}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
