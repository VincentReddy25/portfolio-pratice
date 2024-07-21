
import { Link } from "react-router-dom";

import HomeImage from "../assets/images/mythical-dragon-beast-anime-style.jpg";
import AboutImage from "../assets/images/anime-character-traveling.jpg";
import ContactImage from "../assets/images/mythical-dragon-beast-anime-style.jpg";
import BlogImage from "../assets/images/roronoa-zoro-from-one-piece-2024-pw-1366x768.jpg";
import ProjectImage from "../assets/images/ryomen-sukuna-from-jujutsu-kaisen-kj-1366x768.jpg";
import OtherImage from "../assets/images/ryomen-sukuna-from-jujutsu-kaisen-kj-1366x768.jpg";


export default function Home() {
  return (
    <>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 text-center bg-black p-4">

        <Link
          className="border border-gray-900 text-white uppercase relative overflow-hidden group md:col-span-2"
          to="/Home"
        >
          <img
            src={HomeImage}
            alt="Home"
            className="w-full object-cover  h-50vh "
          />
          <p className="absolute inset-0 flex items-center justify-center text-xl font-bold bg-black/30 hover:bg-black/0 transition  group-hover:hidden">
            HOME
          </p>
        </Link>

        <Link
          className="border border-gray-900 text-white uppercase relative overflow-hidden group "
          to="/About"
        >
          <img
            src={AboutImage}
            alt="About"
            className="w-full h-full object-cover  h-50vh"
          />
          <p className="absolute inset-0 flex items-center justify-center text-xl font-bold bg-black/30 hover:bg-black/0 transition  group-hover:hidden">
            About
          </p>
        </Link>
        <Link
          className="border border-gray-900 text-white uppercase relative overflow-hidden group "
          to="/Contact"
        >
          <img
            src={ContactImage}
            alt="Contact"
            className="w-full h-full object-cover  h-50vh"
          />
          <p className="absolute inset-0 flex items-center justify-center text-xl font-bold bg-black/30 hover:bg-black/0 transition  group-hover:hidden">
            Contact
          </p>
        </Link>
        <Link
          className="border border-gray-900 text-white uppercase relative overflow-hidden group md:col-span-2"
          to="/Project"
        >
          <img
            src={ProjectImage}
            alt="Project"
            className="w-full h-full object-cover  h-50vh"
          />
          <p className="absolute inset-0 flex items-center justify-center text-xl font-bold bg-black/30 hover:bg-black/0 transition  group-hover:hidden">
            Projects
          </p>
        </Link>
        <Link
          className="border border-gray-900 text-white uppercase relative overflow-hidden group "
          to="/Blog"
        >
          <img
            src={BlogImage}
            alt="Blog"
            className="w-full h-full object-cover  h-50vh"
          />
          <p className="absolute inset-0 flex items-center justify-center text-xl font-bold bg-black/30 hover:bg-black/0 transition  group-hover:hidden">
            Blog
          </p>
        </Link>
        <Link
          className="border border-gray-900 text-white uppercase relative overflow-hidden group "
          to="/Others"
        >
          <img
            src={OtherImage}
            alt="Others"
            className="w-full h-full object-cover  h-50vh"
          />
          <p className="absolute inset-0 flex items-center justify-center text-xl font-bold bg-black/30 hover:bg-black/0 transition  group-hover:hidden">
            Others
          </p>
        </Link>
      </div>

    </>
  )
}
