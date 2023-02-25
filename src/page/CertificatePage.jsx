import Sertifikat from "../asset/Sertifikat.jpg"
import Js from "../asset/js.png"
import Html from "../asset/html.png"
import Css from "../asset/css.png"
const Certificatepage = () => {
  return(
    <div className="w-full min-h-screen">
      <div className="w-3/4 mx-auto p-5">
      <h1 className="text-2xl font-bold">My Certificate</h1>
        <div className="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-2 gap-5 mt-3">
          <a href="https://www.dicoding.com/certificates/2VX31EOKNZYQ" className="border-2 hover:tracking-wide rounded-md hover:scale-105 duration-150">
            <img src={Sertifikat} />
            <div className="p-3">
              <h1 className="font-bold ">Dasar Pemrograman Web</h1>
              <p >Dicoding</p>
              <div className="flex justify-end space-x-1">
                <img src={Html} width="25px" />
                <img src={Css} width="25px" />
                <img src={Js} width="35px" />
              </div>
            </div>
          </a>
      </div>
      </div>
    </div>
  )
}

export default Certificatepage