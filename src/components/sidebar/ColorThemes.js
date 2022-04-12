import React from "react"

const ColorThemes = () => {
  return (
    <div className="m-4 rounded-md bg-white p-4 shadow-md">
      <h2 className="text-lg font-bold">
        <span className="text-yellow-600">Color</span> Theme
      </h2>
      <form className="mr-4">
        <label className="my-2 flex justify-around rounded-xl border-2 py-1" htmlFor="theme_1">
          <span className="self-center">Theme 1</span>
          <input className="hidden" type="radio" name="theme" id="theme_1" />
          <ul className="flex gap-2 self-center">
            <li className="aspect-square w-4 self-center rounded-full bg-red-200"></li>
            <li className="aspect-square w-4 self-center rounded-full bg-red-200"></li>
            <li className="aspect-square w-4 self-center rounded-full bg-red-200"></li>
            <li className="aspect-square w-4 self-center rounded-full bg-red-200"></li>
          </ul>
        </label>
        <label className="my-2 flex justify-around rounded-xl border-2 py-1" htmlFor="theme_2">
          <span className="self-center">Theme 2</span>
          <input className="hidden" type="radio" name="theme" id="theme_2" />
          <ul className="flex gap-2 self-center">
            <li className="aspect-square w-4 self-center rounded-full bg-red-200"></li>
            <li className="aspect-square w-4 self-center rounded-full bg-red-200"></li>
            <li className="aspect-square w-4 self-center rounded-full bg-red-200"></li>
            <li className="aspect-square w-4 self-center rounded-full bg-red-200"></li>
          </ul>
        </label>
        <label className="my-2 flex justify-around rounded-xl border-2 py-1" htmlFor="theme_3">
          <span className="self-center">Theme 3</span>
          <input className="hidden" type="radio" name="theme" id="theme_3" />
          <ul className="flex gap-2 self-center">
            <li className="aspect-square w-4 self-center rounded-full bg-red-200"></li>
            <li className="aspect-square w-4 self-center rounded-full bg-red-200"></li>
            <li className="aspect-square w-4 self-center rounded-full bg-red-200"></li>
            <li className="aspect-square w-4 self-center rounded-full bg-red-200"></li>
          </ul>
        </label>
      </form>
    </div>
  )
}

export default ColorThemes
