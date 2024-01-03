import { useState } from "react";
import About from "../about/About";
import Certificates from "../Certificates/Certificates";
import Projects from "../Projects/Projects";
import Contact from "../Contacts/Contact";
import menuarray from "./menu.json"

const Tabs = () => {
  const [clicked, setClicked] = useState("About");
  const handleClick = (Value) => {
    if (Value === "About") {
      setClicked("About");
    } else if (Value === "Certificates") {
      setClicked("Certificates");
    } else if (Value === "Projects") {
      setClicked("Projects");
    } else if (Value === "Contact") {
      setClicked("Contact");
    }
  };
  return (
    <div className="w-[80%] profile rounded-3xl relative p-[30px] border border-black">
      <div className="absolute top-0 right-0 flex justify-end">
        <ol className="flex justify-end  gap-5 text-[#D6D6D6] font-semibold p-5 px-10 rounded-tr-3xl rounded-bl-3xl bg-[#2B2B2CBF] text-[15px]">
          {menuarray.map((item) => (
            <li
              className="cursor-pointer hover:text-[#D6D6D665]"
              onClick={() => handleClick(item.name)}
            >
              {item.name}
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-20">
        {clicked === "About" && <About />}
        {clicked === "Certificates" && <Certificates />}
        {clicked === "Projects" && <Projects />}
        {clicked === "Contact" && <Contact />}
      </div>
    </div>
  );
};

export default Tabs;