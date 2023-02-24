import Sertifikat from "../asset/Sertifikat.jpg"

const Certificatepage = () => {
  return(
    <div className="w-full h-screen">
      <div className="w-3/4 mx-auto p-5">
      <h1 className="text-2xl font-bold">My Project</h1>
        <div className="grid grid-cols-3 gap-5 mt-3">
          <a href="oasisteknik.com" className="border-2 hover:tracking-wide rounded-md hover:scale-105 duration-150">
            <img src={Sertifikat} />
            <div className="p-3">
              <h1 className="font-bold ">Dasar Pemrograman Web</h1>
              <p >Dicoding</p>
              <div className="flex justify-end">
                <img src="" width="35px" />
              </div>
            </div>
          </a>
      </div>
      </div>
    </div>
  )
}

export default Certificatepage