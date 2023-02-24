import Oasisteknik from "../asset/oasisteknik.png";
import Portalines from "../asset/portalines.png"
import Ssa from "../asset/ssa.png"
import Chemweekits from "../asset/chemweekits.png"
import Wordpress from "../asset/wordpress.png"
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
              <div className="flex justify-end">
                <img src={Wordpress} width="35px" />
              </div>
            </div>
          </a>
          <a href="portalines.com" className="border-2 rounded-md hover:scale-105 duration-150">
            <img src={Portalines} />
            <div className="p-3">
              <h1 className="font-bold">Portalines</h1>
              <p>Portal Berita</p>
              <div className="flex justify-end">
                <img src={Wordpress} width="35px" />
              </div>
            </div>
          </a>
          <a href="ssacrane.com" className="border-2 rounded-md hover:scale-105 duration-150">
            <img src={Ssa} />
            <div className="p-3">
              <h1 className="font-bold">SSA Crane</h1>
              <p>Company Profile</p>
              <div className="flex justify-end">
                <img src={Wordpress} width="35px" />
              </div>
            </div>
          </a>
          <a href="ssacrane.com" className="border-2 rounded-md hover:scale-105 duration-150">
            <img src={Chemweekits} />
            <div className="p-3">
              <h1 className="font-bold">Chemweekits</h1>
              <p>Company Profile</p>
              <div className="flex justify-end">
                <img src={Wordpress} width="35px" />
              </div>
            </div>
          </a>
        
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
