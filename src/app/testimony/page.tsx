import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Testimoni - Fresh Beton Indonesia",
  description:
    "Disini kalian bisa lihat testimoni dari para pelanggan Fresh Beton Indonesia",
  icons: {
    icon: "./icon.ico",
  },
};

const page = () => {
  return (
    <section>
      <Header />
      <div className="min-w-screen bg-[#FAF5EF] min-h-screen flex items-center justify-center py-5">
        {/* <div className="w-full bg-[#FAF5EF] border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800"> */}
        <div className="w-full bg-[#FAF5EF] px-5 py-16 md:py-24 text-gray-800">
          <h1 className="text-center text-green-600 pb-4 text-4xl font-bold capitalize">
            testimoni
          </h1>
          <div className="w-full max-w-6xl mx-auto">
            <div className="-mx-3 md:flex items-start">
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="/sekolah sma bogor.jpeg" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm text-gray-600">
                        <ul className="w-auto">
                          <li>Bpk. Asep - Yayasan Sekolah SMA Bogor</li>
                          <li>(Project Owner)</li>
                        </ul>
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Pengecoran dilakukan sesuai dengan jadwal, volume beton
                      yang digunakan sesuai dan pelayanan dari pihak fresh beon
                      juga bagus.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="/rumah makan.jpeg" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm text-gray-600">
                        <ul className="w-auto">
                          <li>
                            Bpk. Kamsir - Rumah Makan Padang Pagi Sore Bogor
                          </li>
                          <li>(Project Owner)</li>
                        </ul>
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Dari segi pelayanan cukup bagus dan dari mutu pun bagus
                      sesuai dengan mutu yang diinginkan. Kami juga sudah
                      beberapa kali order di sini dan sangat baik. Untuk
                      selanjutnya kami berharap bisa order di Fresh Beton lagi.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="/RS Hermina Depok.jpeg" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm text-gray-600">
                        <ul className="w-auto">
                          <li>Bpk. Dani Purwanto - RS Hermina Depok</li>
                          <li>(Project Owner)</li>
                        </ul>
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Kami menggunakan Fresh Beton karena sebelumnya sudah
                      pernah menggunakan juga. Dari segi service Fresh Beton
                      memang oke
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="/Hotel Wellness & Resort Bogor.jpeg" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm text-gray-600">
                        {/* Bpk. Hairuddin <br />
                        (Project Owner). */}
                        <ul className="w-auto">
                          <li>
                            Bpk. Hairuddin - Hotel Wellness & Resort Bogor
                          </li>
                          <li>(Project Owner)</li>
                        </ul>
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Timnya tangguh dan mesinnya semua lengkap, respon dari tim
                      Fresh Beton sangat ramah tamah dan mereka bersedia
                      menanyakan permasalahan apa yang sedang dihadapi.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 md:w-1/3">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="/Desa Jogjogan Cisarua.jpeg" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm text-gray-600">
                        {/* H. Enjang Ruslan Purnama <br />
                        (Kepala Desa) */}
                        <ul className="w-auto">
                          <li>
                            H. Enjang Ruslan Purnama - Desa Jogjogan Cisarua
                          </li>
                          <li>(Kepala Desa)</li>
                        </ul>
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Terima kasih Fresh Beton yang sudah membantu suksesnya
                      pembangunan jalan desa Kampung Pasir Panjang. Fresh Beton
                      luar biasa, semoga makin jaya.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-4 items-center">
                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                      <img src="/Rumah Genset Mabes.jpeg" alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-bold text-sm text-gray-600">
                        {/* Bpk. <br />
                        (Project Manager) */}
                        <ul className="w-auto">
                          <li>Bapak Adi - Rumah Genset Mabes Angkatan Darat</li>
                          <li>(Project Owner)</li>
                        </ul>
                      </h6>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="text-sm leading-tight">
                      <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                        "
                      </span>
                      Dari segi pelayanannya baik, jadi kami akan lanjut
                      menggunakan Fresh Beton kedepannya.
                      <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                        "
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default page;
