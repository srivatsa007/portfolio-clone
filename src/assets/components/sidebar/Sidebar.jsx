import React from "react";
import Info from "./info";
import { IoHourglassOutline } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { FaUser, FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="profile max-h-[532px] px-[35px] pt-[20px] pb-[30px] text-center border border-black w-58 rounded-3xl flex flex-col gap-8 sticky top-[30px]">
      <div className="flex flex-col items-center gap-4">
        <img
          className="rounded-3xl w-[150px]"
          src="https://media.licdn.com/dms/image/D5635AQF87WbYVlTUxA/profile-framedphoto-shrink_400_400/0/1697488355041?e=1704909600&v=beta&t=GH-edpYSCEz-0LVDQhxLSpedAsUewkwm6HPk8QG4G5s"
          alt="avatar"
        />
        <p className="text-[18px] font-bold text-white">D S SRIVATSA</p>
        <p className="hello bg-[#1E1E1F6B] w-full text-white text-[12px] p-1 rounded-3xl">
          Hello, World !
        </p>
      </div>
      <div className="flex flex-col gap-8 py-5 border-t border-black">
        <Info icon={<IoHourglassOutline />} title="Age" sub="24 years old" />
        <Info
          icon={<IoLocationSharp />}
          title="Location"
          sub="Vizag, Andhra"
        />
      </div>
        <div className="flex justify-center gap-5 text-white text-md">
            <FaGithub className="cursor-pointer opacity-50 hover:opacity-100" />
            <FaLinkedin className="cursor-pointer opacity-50 hover:opacity-100" />
            <FaInstagram className="cursor-pointer opacity-50 hover:opacity-100" />
            <FaTwitter className="cursor-pointer opacity-50 hover:opacity-100" />
        </div>
    </div>
  );
};

export default Profile;