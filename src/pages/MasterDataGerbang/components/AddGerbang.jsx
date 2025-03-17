import React, { useState } from 'react';

const AddGerbang = ({ isOpen, onClose, onSave }) => {
  const [ruas, setRuas] = useState('');
  const [gerbang, setGerbang] = useState('');

  const handleSave = () => {
    if (ruas && gerbang) {
      onSave({ ruas, gerbang });
      setRuas('');
      setGerbang('');
      onClose();
    } else {
      alert('Harap isi semua field!');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
        <h2 className="text-lg font-semibold mb-4 text-center">Tambah Gerbang</h2>
        <div className="flex gap-3">
          {/* Input Ruas */}
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Ruas*</label>
            <input
              type="text"
              value={ruas}
              onChange={(e) => setRuas(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Masukkan Ruas"
            />
          </div>

          {/* Input Gerbang */}
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Gerbang*</label>
            <input
              type="text"
              value={gerbang}
              onChange={(e) => setGerbang(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Masukkan Gerbang"
            />
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
          >
            Batal
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddGerbang;
