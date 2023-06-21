import { postCountriesFromDb } from "@/queris/postCountries";
import React, { useState } from "react";

const Create = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputImage, setInputImage] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };
  const changeHandlerImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputImage(e.target.value);
  };
  return (
    <main style={{ padding: 50 }}>
      <h1 className="text-4xl mx-auto w-fit mb-8">ADD NEW COUNTRY BOS!</h1>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="country"
        type="text"
        placeholder="Country"
        onChange={changeHandler}
      />
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="image"
        type="url"
        placeholder="Image URL"
        onChange={changeHandlerImage}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 my-4 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => postCountriesFromDb(inputValue, inputImage)}
      >
        Submiit
      </button>
    </main>
  );
};

export default Create;
