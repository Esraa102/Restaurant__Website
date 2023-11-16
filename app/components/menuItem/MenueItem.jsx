import React from "react";
import "./menueItem.css";
const MenueItem = (props) => {
  return (
    <div className=" my-10 w-full">
      <div className="flex justify-between items-baseline gap-6 text-white">
        <div className="font-mainFont text-2xl font-bold text-mainColor  flex-1">
          <p>{props.item}</p>
        </div>
        <div className="w-[100px] lg:w-[150px] h-[1px] bg-mainColor" />
        <div className="text-xl">
          <p>{props.price}</p>
        </div>
      </div>
      <div className="text-sm text-textColor">{props.subItem}</div>
    </div>
  );
};

export default MenueItem;
