import React, { useEffect, useState } from "react";
import { DEFAULT_THEME } from "../themes/index";
import { applyTheme } from "../themes/utils";

const ColorThemes = () => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);
  return (
    <div className="m-4 rounded-md bg-bgPrimary p-4 shadow-md">
      <h2 className="text-lg font-bold text-textPrimary">
        <span className="font- font-extrabold text-primary">Color</span> Theme
      </h2>
      <div className="mr-4">
        <input className="peer hidden" type="radio" name="theme" id="theme_1" defaultChecked />
        <label onClick={() => setTheme("theme1")} className="bg- my-2 flex cursor-pointer justify-around rounded-xl border-2 py-1 peer-checked:border-primary" htmlFor="theme_1">
          <span className="self-center font-bold text-textPrimary">Theme 1</span>
          <ul className="flex gap-2 self-center">
            <li className="aspect-square w-4 self-center rounded-full border border-slate-300 bg-[#940C2B]"></li>
            <li className="aspect-square w-4 self-center rounded-full border border-slate-300 bg-[#628d70]"></li>
            <li className="aspect-square w-4 self-center rounded-full border border-slate-300 bg-[#fafafa]"></li>
            <li className="aspect-square w-4 self-center rounded-full border border-slate-300 bg-[#CACBBC]"></li>
          </ul>
        </label>
      </div>
      <div className="mr-4">
        <input className="peer hidden" type="radio" name="theme" id="theme_2" />
        <label onClick={() => setTheme("theme2")} className="my-2 flex cursor-pointer justify-around rounded-xl border-2 py-1 peer-checked:border-primary" htmlFor="theme_2">
          <span className="self-center font-bold text-textPrimary">Theme 2</span>
          <ul className="flex gap-2 self-center">
            <li className="aspect-square w-4 self-center rounded-full border border-slate-300 bg-[#580F55]"></li>
            <li className="aspect-square w-4 self-center rounded-full border border-slate-300 bg-[#9e6565]"></li>
            <li className="aspect-square w-4 self-center rounded-full border border-slate-300 bg-[#FFFFFF]"></li>
            <li className="aspect-square w-4 self-center rounded-full border border-slate-300 bg-[#DECBBC]"></li>
          </ul>
        </label>
      </div>
      <div className="mr-4">
        <input className="peer hidden" type="radio" name="theme" id="theme_3" />
        <label onClick={() => setTheme("theme3")} className="my-2 flex cursor-pointer justify-around rounded-xl border-2 py-1 peer-checked:border-primary" htmlFor="theme_3">
          <span className="self-center font-bold text-textPrimary">Theme 3</span>
          <ul className="flex gap-2 self-center">
            <li className="aspect-square w-4 self-center rounded-full border border-slate-300 bg-[#c96f16]"></li>
            <li className="aspect-square w-4 self-center rounded-full border border-slate-300 bg-[#7377a1]"></li>
            <li className="aspect-square w-4 self-center rounded-full border border-slate-300 bg-[#FFFFFF]"></li>
            <li className="aspect-square w-4 self-center rounded-full border border-slate-300 bg-[#DECBD7]"></li>
          </ul>
        </label>
      </div>
    </div>
  );
};

export default ColorThemes;
