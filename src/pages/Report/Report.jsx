import React, { useState } from "react";
import Search from "./components/Search";
import DateFilter from "./components/DateFilter";
import Tab from "./components/Tab";
import Table from "./components/Table";
import Pagination from "./components/Pagination";
import EntriesPerPage from "./components/EntriesPerPage";

const Report = () => {
  const [search, setSearch] = useState("");
  const [tempSearch, setTempSearch] = useState("");
  const [date, setDate] = useState("");
  const [tempDate, setTempDate] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
const [sortOrder, setSortOrder] = useState("asc");

  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("Total Tunai");
  const totalPages = 10;

  const dataLaporan = [
    { ruas: "Ruas 1", gerbang: "Gerbang 1", gardu: "01", hari: "Kamis", tanggal: "30-05-2024", metode: "Tunai", golI: 567, golII: 234, golIII: 12, golIV: 10, golV: 8, total: 831 },
    { ruas: "Ruas 1", gerbang: "Gerbang 2", gardu: "01", hari: "Rabu", tanggal: "29-05-2024", metode: "Total E-Toll", golI: 456, golII: 345, golIII: 23, golIV: 12, golV: 9, total: 986 },
    { ruas: "Ruas 1", gerbang: "Gerbang 3", gardu: "02", hari: "Selasa", tanggal: "28-05-2024", metode: "Total Flo", golI: 768, golII: 345, golIII: 34, golIV: 13, golV: 7, total: 897 },
    { ruas: "Ruas 2", gerbang: "Gerbang 4", gardu: "02", hari: "Senin", tanggal: "27-05-2024", metode: "Total KTP", golI: 1435, golII: 1234, golIII: 34, golIV: 15, golV: 8, total: 2304 },
    { ruas: "Ruas 2", gerbang: "Gerbang 5", gardu: "02", hari: "Minggu", tanggal: "26-06-2024", metode: "Total Keseluruhan", golI: 2454, golII: 1256, golIII: 12, golIV: 16, golV: 7, total: 3459 },
    { ruas: "Ruas 2", gerbang: "Gerbang 5", gardu: "02", hari: "Minggu", tanggal: "26-06-2024", metode: "Total E-Tol+Tunai+Flo", golI: 2454, golII: 1256, golIII: 12, golIV: 16, golV: 7, total: 3459 },
    { ruas: "Ruas 2", gerbang: "Gerbang 5", gardu: "02", hari: "Minggu", tanggal: "26-06-2024", metode: "Tunai", golI: 2454, golII: 1256, golIII: 12, golIV: 16, golV: 7, total: 3459 },
    { ruas: "Ruas 2", gerbang: "Gerbang 5", gardu: "02", hari: "Minggu", tanggal: "26-06-2024", metode: "Total KTP", golI: 2454, golII: 1256, golIII: 12, golIV: 16, golV: 7, total: 3459 },
    { ruas: "Ruas 2", gerbang: "Gerbang 5", gardu: "02", hari: "Minggu", tanggal: "26-07-2024", metode: "Total E-Toll", golI: 2454, golII: 1256, golIII: 12, golIV: 16, golV: 7, total: 3459 },
    { ruas: "Ruas 2", gerbang: "Gerbang 5", gardu: "02", hari: "Minggu", tanggal: "26-07-2024", metode: "Tunai", golI: 2454, golII: 1256, golIII: 12, golIV: 16, golV: 7, total: 3459 },
  ];

  const filteredData = dataLaporan.filter((item) => {
    const searchMatch = item.ruas.toLowerCase().includes(search.toLowerCase());
    const dateMatch = date ? item.tanggal === date : true;
    return searchMatch && dateMatch;
  });

  // **Filter berdasarkan metode pembayaran (dari tab)**
  const filteredByMethod =
    activeTab === "Total Keseluruhan"
      ? filteredData
      : filteredData.filter((item) => item.metode === activeTab);

  // Kolom yang bisa di-sort (Gol I - Gol V tidak bisa)
  const sortableColumns = ["ruas", "gerbang", "gardu", "hari", "tanggal", "metode", "total"];

  // Fungsi sorting
  const handleSort = (column) => {
    if (!sortableColumns.includes(column)) return;

    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  // Data yang sudah diurutkan
  const sortedData = [...filteredByMethod].sort((a, b) => {
    if (!sortColumn) return 0;
    if (!sortableColumns.includes(sortColumn)) return 0;

    const aValue = typeof a[sortColumn] === "string" ? a[sortColumn].toLowerCase() : a[sortColumn];
    const bValue = typeof b[sortColumn] === "string" ? b[sortColumn].toLowerCase() : b[sortColumn];

    if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
    if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });


  const indexOfLastPost = (currentPage + 1) * entriesPerPage;
  const indexOfFirstPost = indexOfLastPost - entriesPerPage;
  const currentData = filteredData.slice(indexOfFirstPost, indexOfLastPost);

  console.log("c", currentData)
  const data = [];
  const tabs = [
    "Total Tunai",
    "Total E-Toll",
    "Total Flo",
    "Total KTP",
    "Total Keseluruhan",
    "Total E-Toll+Tunai+Flo",
  ];

  const handleReset = () => {
    setSearch("");      
    setDate("");      
    setEntriesPerPage(5);  
    setCurrentPage(0);  
 };

 const columns = [
  { key: "ruas", label: "Ruas", sortable: true },
  { key: "gerbang", label: "Gerbang", sortable: true },
  { key: "gardu", label: "Gardu", sortable: true },
  { key: "hari", label: "Hari", sortable: true },
  { key: "tanggal", label: "Tanggal", sortable: true },
  { key: "metode", label: "Metode", sortable: true },
  { key: "golI", label: "Gol I", sortable: false },
  { key: "golII", label: "Gol II", sortable: false },
  { key: "golIII", label: "Gol III", sortable: false },
  { key: "golIV", label: "Gol IV", sortable: false },
  { key: "golV", label: "Gol V", sortable: false },
  { key: "total", label: "Total", sortable: true },
];



  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        <Search onSearch={setSearch}  />
        <DateFilter onDateChange={setDate}  />
      </div>
      <div className="flex mb-3 gap-4">
        <button className="px-4 py-2 bg-blue-700 hover:bg-blue-300 text-white rounded">
          Filter
        </button>
        <button className="px-4 py-2 bg-gray-100 text-black rounded" onClick={handleReset}>
          Reset
        </button>
      </div>
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
      <Table
  data={currentData}
  columns={columns}
/>



      <div className="flex justify-end gap-7">

      <EntriesPerPage
        entriesPerPage={entriesPerPage}
        setEntriesPerPage={(value) => {
          setEntriesPerPage(value);
          setCurrentPage(0);
       }}
      />
      <Pagination
        totalPage={Math.ceil(filteredData.length / entriesPerPage)}
        postsPerPage={entriesPerPage}
        totalPosts={filteredData.length}
        onClick={(page) => setCurrentPage(page)}
        currentPage={currentPage}
      />
      </div>
    </div>
  );
};

export default Report;
