'use client'

export default function About() {
    return (
        <div id="about" className="min-h-screen flex items-center bg-transparent px-4 py-10 text-gray-800">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">About <span className="text-blue-500">Me</span></h1>
                <p className="text-center text-gray-500 mb-10">Berikut adalah beberapa penjelasan tentang diri saya.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                    <div>
                        <img src="images/mrevy2.png" className="h-80"/>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow">
                        <div className="flex flex-col">
                            <p className="mb-2"><span className="font-bold">Bismillah</span>, pada awalnya saya tidak mengerti seputar teknologi komputer tetapi pada awal kelas 10 saya mencoba mempelajari dunia IT khususnya di Web, ikhtiar dan do'a saya lakukan dan Alhamdulillah pada saat ini saya mampu dan memahami dunia web programming.<a href="/" className="text-blue-400"> Portofoliomrrp</a></p>
                            <p className="my-1"><span className="font-bold">Nama : </span>Muhammad Revy Rizqy Pratama</p>
                            <p className="my-1"><span className="font-bold">Kelahiran : </span>Cimahi, <a href="https://jabarprov.go.id" className="text-blue-400"> Jawa Barat</a>.</p>
                            <p className="my-1"><span className="font-bold">Tanggal Lahir : </span>08 Agustus 2006</p>
                            <p className="my-1"><span className="font-bold">Sekolah : </span>SMK Negeri 1 <a href="https://cimahikota.go.id" className="text-blue-400"> Cimahi</a>.</p>
                            <p className="my-1"><span className="font-bold">Hobi : </span>Berwirausaha, Ngoding</p>
                            <p className="my-1"><span className="font-bold">Cita-cita : </span>Pengusaha, IT Web Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}