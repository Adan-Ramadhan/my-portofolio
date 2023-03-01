import Profile from "../asset/profile.jpg";
import Neko from "../asset/neko.png";
import Loading from "../component/Loading";
import { useState } from "react";

const Home = () => {

  const [isLoading, setIsLoading] = useState(false)


 



  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-sky-900 to-white">
    <div
          style={{
            backgroundImage: `url(${Neko})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          className="w-full h-screen grid place-items-center "
        >
          <div className="text-center mt-48 text-white md:backdrop-blur-none md:bg-transparent  backdrop-blur-sm bg-slate-700/50 p-10 rounded-lg">
            <h1 className="text-4xl font-bold">Hi, I'm Adan Ramadhan</h1>
            <p className="font-sans text-lg">
              Front End Development
            </p>
            <div className="w-full flex place-content-center space-x-5 mt-3">
              <a href="/certificate"  className="bg-sky-700 hover:bg-sky-900 p-2 text-white rounded">
                See All Certificate
              </a>
              <a href="/project" className="bg-sky-700 hover:bg-sky-900 p-2 text-white rounded">
                See All Project
              </a>
            </div>
          </div>
          <div className="mt-36 font-bold">
          <h1>© Copyright 2023 By <a href="instagram.com/adaan_ramadhan" className="hover:text-sky-500">Adan Ramadhan</a></h1>
          </div>
        </div>
      </div>
  );
};

export default Home;
