import React from "react";
import ProgressBar from "./progressbar";

const ProgrammingLanguages = () => {
  return (
    <div>
      <p className="text-[24px] my-[20px] text-[#fafafa] text-center font-semibold">
        Programming Languages
      </p>
      <div className="insideS flex flex-col gap-5 bg-[#2020221F] p-[40px] rounded-2xl">
        <ProgressBar title="JavaScript" level={"80%"} value={80} />
        <ProgressBar title="TypeScript" level={"50%"} value={50} />
        <ProgressBar title="C++" level={"75%"} value={25} />
        <ProgressBar title="CSS" level={"95%"} value={95} />
        <ProgressBar title="HTML" level={"100%"} value={100} />
      </div>
    </div>
  );
};

export default ProgrammingLanguages;
