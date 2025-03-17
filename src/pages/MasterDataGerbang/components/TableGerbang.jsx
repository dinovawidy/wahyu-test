import React from 'react'
import { FaPlus, FaPencilAlt, FaEye, FaTrash } from 'react-icons/fa';

const TableGerbang = ({data}) => {
  return (
    <div className="overflow-x-auto p-4">
        <table className="w-full border-collapse border border-gray-300 text-left">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-2 border">No.</th>
                        <th className="p-2 border">Ruas ⬍</th>
                        <th className="p-2 border">Gerbang ⬍</th>
                        <th className="p-2 border">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="p-2 border">{index + 1}</td>
                            <td className="p-2 border">{item.ruas}</td>
                            <td className="p-2 border">{item.gerbang}</td>
                            <td className="p-2 border flex gap-2">
                                 {/* Icon Edit */}
                                 <FaPencilAlt 
                                    className="w-5 h-5 text-blue-500 cursor-pointer hover:text-blue-700"
                                    title="Edit"
                                />
                                {/* Icon View */}
                                <FaEye 
                                    className="w-5 h-5 text-green-500 cursor-pointer hover:text-green-700"
                                    title="View"
                                />
                                {/* Icon Delete */}
                                <FaTrash 
                                    className="w-5 h-5 text-red-500 cursor-pointer hover:text-red-700"
                                    title="Delete"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  )
}

export default TableGerbang