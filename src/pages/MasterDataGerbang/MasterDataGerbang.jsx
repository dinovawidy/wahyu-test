import React, { useState } from "react";
import TableGerbang from "./components/TableGerbang";
import TableHeader from "./components/TableHeader";
import SearchGerbang from "./components/SearchGerbang";
import EntriesPerPage from "./components/EntriesPerPage";
import Pagination from "./components/Pagination";
import AddGerbang from "./components/AddGerbang";
const MasterDataGerbang = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = [
    { no: 1, ruas: "Ruas 1", gerbang: "Gerbang 1" },
    { no: 2, ruas: "Ruas 1", gerbang: "Gerbang 2" },
    { no: 3, ruas: "Ruas 2", gerbang: "Gerbang 3" },
    { no: 4, ruas: "Ruas 2", gerbang: "Gerbang 4" },
    { no: 5, ruas: "Ruas 3", gerbang: "Gerbang 5" },
    { no: 6, ruas: "Ruas 3", gerbang: "Gerbang 6" },
    { no: 7, ruas: "Ruas 4", gerbang: "Gerbang 7" },
    { no: 8, ruas: "Ruas 4", gerbang: "Gerbang 8" },
    { no: 9, ruas: "Ruas 5", gerbang: "Gerbang 9" },
  ];

  // Filter data berdasarkan input search
  const filteredData = data.filter((item) =>
    item.ruas.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastPost = currentPage * entriesPerPage;
  const indexOfFirstPost = indexOfLastPost - entriesPerPage;
  const currentData = filteredData.slice(indexOfFirstPost, indexOfLastPost);
  

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Master Data Gerbang</h1>
      <div className="flex w-full">
        <SearchGerbang onSearch={setSearch} />
        <div className="flex ml-auto justify-self-end">
          <TableHeader modalOpen={() => setIsModalOpen(true)} />
        </div>
      </div>
      <TableGerbang data={currentData} />
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

      {isModalOpen && (
        <AddGerbang
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default MasterDataGerbang;
