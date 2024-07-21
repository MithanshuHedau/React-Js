import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-black max-sm:text-[10px] w-full max-sm:h-20  h-12 max-sm:px-4 px-10 items-center text-white flex justify-center max-sm:gap-4 gap-10">
      <div className="flex w-full justify-center">
        <h1>TechyStar</h1>
        <p>@all right reserved</p>
      </div>
      <div className="flex w-full gap-10 max-sm:gap-3 items-center justify-end">
        <h5>Follow us </h5>
        <div className="flex gap-5 max-sm:gap-3">
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaInstagramSquare /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer