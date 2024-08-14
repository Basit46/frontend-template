import React from "react";
import { PiTelegramLogoBold as Telegram } from "react-icons/pi";
import { FaXTwitter as Twitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="pt-[20px] px-[230px] flex justify-between items-center">
      <h1 className="text-[32px] font-CherryBomb text-[#FFC227]">DMM</h1>

      <ul className="flex gap-[20px] items-center">
        <li>Home</li>
        <li>About</li>
        <li>How To Buy</li>
        <li>Tokenomics</li>
      </ul>

      <div className="flex items-center gap-[10px]">
        <li className="list-none mr-[10px]">Roadmap</li>
        <div className="relative size-[51px]">
          <a href="" target="blank" className="social-link">
            <Telegram className="text-[28px]" />
          </a>
          <div className="absolute left-[-2px] bottom-[-2px] size-full bg-black rounded-full" />
        </div>

        <div className="relative size-[51px]">
          <a href="" target="blank" className="social-link">
            <Twitter className="text-[28px]" />
          </a>
          <div className="absolute left-[-2px] bottom-[-2px] size-full bg-black rounded-full" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
