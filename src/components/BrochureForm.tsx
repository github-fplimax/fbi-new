"use client";

import React, { useState } from 'react';

const BrochureForm = () => {
    const [nama, setNama] = useState('');
    const [perusahaan, setPerusahaan] = useState('');
    const [jabatan, setJabatan] = useState('');
    const [kontak, setKontak] = useState('');
    const [warning, setWarning] = useState(false);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!nama || !perusahaan || !jabatan || !kontak) {
            setWarning(true);
        } else {
            setWarning(false);
            // Lakukan logika untuk mengunduh brosur (misalnya, buat file PDF)
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Form Brosur</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="nama" className="block">Nama:</label>
                    <input type="text" id="nama" name="nama" value={nama} onChange={(e) => setNama(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="perusahaan" className="block">Perusahaan:</label>
                    <input type="text" id="perusahaan" name="perusahaan" value={perusahaan} onChange={(e) => setPerusahaan(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="jabatan" className="block">Jabatan:</label>
                    <input type="text" id="jabatan" name="jabatan" value={jabatan} onChange={(e) => setJabatan(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="kontak" className="block">Kontak:</label>
                    <input type="text" id="kontak" name="kontak" value={kontak} onChange={(e) => setKontak(e.target.value)} className="w-full border border-gray-300 rounded-md px-3 py-2" required />
                </div>
                {warning && <p className="text-red-500">Silakan isi semua field!</p>}
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Unduh Brosur</button>
            </form>
        </div>
    );
};

export default BrochureForm;
