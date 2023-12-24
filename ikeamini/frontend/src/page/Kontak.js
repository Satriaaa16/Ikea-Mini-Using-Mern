import React from 'react'


const Kontak = () => {
  const kontakList = [
    {
      id: 1,
      nama: 'Satria Khaylan Algibrani',
      gambar: require('./foto anggota/3337220087_Satria Khaylan Algibrani.jpg'),
      posisi: 'Web Developer',
      NIM: '3337220087',
    },
    {
      id: 2,
      nama: 'Muhamad Muslih',
      gambar: require('./foto anggota/3337220025.jpg'),
      posisi: 'Mobile Developer',
      NIM: '33372200',
    },
    {
      id: 3,
      nama: 'Muhamad Mansurudin',
      gambar: require('./foto anggota/3337220005.png'), // Update this with the correct path
      posisi: 'Web Developer',
      NIM: '33372200',
    },
    // ...
  ];
  

  return (
    <div className="container mx-auto mt-8">
    <h1 className="text-3xl font-bold mb-4 bg-yellow-400 rounded-full text-center text-white">Tim Kami</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {kontakList.map((kontak) => (
          <div key={kontak.id} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={kontak.gambar}
              alt={kontak.nama}
              className="w-16 h-16 mx-auto mb-4 rounded-full"
            />
            <h2 className="text-xl font-semibold text-center">{kontak.nama}</h2>
            <h3 className='text-gray-700 texl-xl text-center font-normal '>{kontak.NIM}</h3>
            <p className="text-gray-500 text-center">{kontak.posisi}</p>
          </div>
        ))}
   
       
       
      </div>
    </div>
  );
};


export default Kontak