import React from 'react'
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const Table = ({data, columns}) => {

  return (
    <div className="overflow-x-auto p-4">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">No</th>
            <th className="border border-gray-300 px-4 py-2">Ruas</th>
            <th className="border border-gray-300 px-4 py-2">Gerbang</th>
            <th className="border border-gray-300 px-4 py-2">Gardu</th>
            <th className="border border-gray-300 px-4 py-2">Hari</th>
            <th className="border border-gray-300 px-4 py-2">Tanggal</th>
            <th className="border border-gray-300 px-4 py-2">Metode Pembayaran</th>
            <th className="border border-gray-300 px-4 py-2">Gol I</th>
            <th className="border border-gray-300 px-4 py-2">Gol II</th>
            <th className="border border-gray-300 px-4 py-2">Gol III</th>
            <th className="border border-gray-300 px-4 py-2">Gol IV</th>
            <th className="border border-gray-300 px-4 py-2">Gol V</th>
            <th className="border border-gray-300 px-4 py-2">Total Lalin</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 text-center">{index +1 }</td>
              <td className="border border-gray-300 px-4 py-2">{row.ruas}</td>
              <td className="border border-gray-300 px-4 py-2">{row.gerbang}</td>
              <td className="border border-gray-300 px-4 py-2">{row.gardu}</td>
              <td className="border border-gray-300 px-4 py-2">{row.hari}</td>
              <td className="border border-gray-300 px-4 py-2">{row.tanggal}</td>
              <td className="border border-gray-300 px-4 py-2">{row.metode}</td>
              <td className="border border-gray-300 px-4 py-2">{row.golI}</td>
              <td className="border border-gray-300 px-4 py-2">{row.golII}</td>
              <td className="border border-gray-300 px-4 py-2">{row.golIII}</td>
              <td className="border border-gray-300 px-4 py-2">{row.golIV}</td>
              <td className="border border-gray-300 px-4 py-2">{row.golV}</td>
              <td className="border border-gray-300 px-4 py-2 font-bold">{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table