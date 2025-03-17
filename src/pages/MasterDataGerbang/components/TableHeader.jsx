import { FaPlus } from 'react-icons/fa';

const TableHeader = ({modalOpen}) => {
  return (
    <div className="flex p-4 justify-between items-center mb-4">
      
      <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2"
      onClick={modalOpen}>
        <FaPlus />
        Tambah
      </button>
    </div>
  );
};

export default TableHeader;
