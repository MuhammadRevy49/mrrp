export default function Home() {
  return (
    <div
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-12 md:px-20 gap-12 max-w-7xl mx-auto"
    >
      {/* Bagian kiri: gambar */}
      <div className="flex-shrink-0 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-xl overflow-hidden shadow-lg">
        <img
          src="/images/your-photo.jpg" // Ganti dengan path gambar kamu
          alt="Foto Saya"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bagian kanan: teks */}
      <div className="flex flex-col justify-center text-left max-w-xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          Saya seorang <span className="text-blue-500">Web Developer</span>
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Saya berpengalaman membuat website modern menggunakan teknologi seperti React, Next.js, dan Tailwind CSS. 
          Saya fokus pada pengembangan frontend yang responsif dan menarik.
        </p>
        <div className="my-3">
            <a href="#skill" className="px-4 py-2 text-blue-400 border border-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition-all">Pelajari Lebih Lanjut</a>
        </div>
      </div>
    </div>
  );
}
