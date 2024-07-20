
import { Link } from "react-router-dom";

import HomeImage from "../assets/images/mythical-dragon-beast-anime-style.jpg";
import AboutImage from "../assets/images/anime-character-traveling.jpg";
import ContactImage from "../assets/images/mythical-dragon-beast-anime-style.jpg";
import BlogImage from "../assets/images/roronoa-zoro-from-one-piece-2024-pw-1366x768.jpg";
import OtherImage from "../assets/images/ryomen-sukuna-from-jujutsu-kaisen-kj-1366x768.jpg";


export default function Home() {
  return (
    <>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 text-center bg-black p-4 mt-20">
        <Link
          className="border border-gray-900 text-white uppercase relative overflow-hidden"
          to="/Home"
        >
          <img
            src={HomeImage}
            alt="Home"
            className="w-full h-full object-cover"
          />
          <p className="absolute inset-0 flex items-center justify-center text-xl font-bold bg-black/30 hover:bg-black/0 transition ">
            HOME
          </p>
        </Link>
        <Link
          className="border border-gray-900 text-white uppercase relative overflow-hidden"
          to="/About"
        >
          <img
            src={AboutImage}
            alt="About"
            className="w-full h-full object-cover"
          />
          <p className="absolute inset-0 flex items-center justify-center text-xl font-bold bg-black/30 hover:bg-black/0 transition ">
            About
          </p>
        </Link>
        <Link
          className="border border-gray-900 text-white uppercase relative overflow-hidden"
          to="/Contact"
        >
          <img
            src={ContactImage}
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <p className="absolute inset-0 flex items-center justify-center text-xl font-bold bg-black/30 hover:bg-black/0 transition ">
            Contact
          </p>
        </Link>
        <Link
          className="border border-gray-900 text-white uppercase relative overflow-hidden"
          to="/Project"
        >
          <img
            src={BlogImage}
            alt="Project"
            className="w-full h-full object-cover"
          />
          <p className="absolute inset-0 flex items-center justify-center text-xl font-bold bg-black/30 hover:bg-black/0 transition ">
            Projects
          </p>
        </Link>
        <Link
          className="border border-gray-900 text-white uppercase relative overflow-hidden"
          to="/Blog"
        >
          <img
            src={HomeImage}
            alt="Blog"
            className="w-full h-full object-cover"
          />
          <p className="absolute inset-0 flex items-center justify-center text-xl font-bold bg-black/30 hover:bg-black/0 transition ">
            Blog
          </p>
        </Link>
        <Link
          className="border border-gray-900 text-white uppercase relative overflow-hidden"
          to="/Others"
        >
          <img
            src={OtherImage}
            alt="Others"
            className="w-full h-full object-cover"
          />
          <p className="absolute inset-0 flex items-center justify-center text-xl font-bold bg-black/30 hover:bg-black/0 transition ">
            Others
          </p>
        </Link>
      </div>
    </>
  )
}
