import Oasisteknik from "../asset/oasisteknik.png";
import Portalines from "../asset/portalines.png"
const ProjectPage = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-3/4 mx-auto p-5">
        <h1 className="text-2xl font-bold">My Project</h1>
        <div className="grid grid-cols-3 gap-5 mt-3">
          <a href="oasisteknik.com" className="border-2 hover:tracking-wide rounded-md hover:scale-105 duration-150">
            <img src={Oasisteknik} />
            <div className="p-3">
              <h1 className="font-bold ">Oasisteknik</h1>
              <p >Company Profile</p>
            </div>
          </a>
          <a href="portalines.com" className="border-2 rounded-md hover:scale-105 duration-150">
            <img src={Portalines} />
            <div className="p-3">
              <h1 className="font-bold">Portalines</h1>
              <p>Portal Berita</p>
            </div>
          </a>
          <a href="oasisteknik.com" className="border-2 rounded-md hover:scale-105 duration-150">
            <img src={Oasisteknik} />
            <div className="p-3">
              <h1 className="font-bold">Oasisteknik</h1>
              <p>Portal Berita</p>
            </div>
          </a>
        
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
