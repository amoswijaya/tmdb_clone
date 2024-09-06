import React from "react";
interface Props {
  value: string;
  setValue: (value: string) => void;
  list: string[];
}
const ToggleSwitch = ({ value, setValue, list }: Props) => {
  const toggleSwitch = (value: string) => setValue(value);

  return (
    <div className='flex border border-slate-950 rounded-full '>
      {list.map((item) => (
        <span
          onClick={() => toggleSwitch(item)}
          className={`px-4 cursor-pointer ${
            value === item
              ? "bg-[#032541] rounded-full text-[#2CD9AD] font-extrabold"
              : "font-bold"
          } transition-colors duration-300 ease-in-out transform items-center `}
          key={item}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default ToggleSwitch;
