import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

function Navbar({moveisSearch}) {
  const [inputValue, setInputValue] = useState("");


  // form submit handler
  const handleSearchForm = (e) => {
    e.preventDefault();

    if (inputValue === "") return alert("Please enter a movie name");

    setInputValue(inputValue);
    console.log(inputValue);
    moveisSearch(inputValue);
    setInputValue("");
  };

  // input change handler
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <header className=" top-0 fixed right-0 left-0 z-30 ">
      <nav className="bg-black flex justify-between p-4">
        <div className="text-[17px] text-white font-bold">
          Movie <span className="text-yellow-600 font-bold">House</span>
        </div>
        <form
          onSubmit={handleSearchForm}
          action=""
          className="overflow-hidden border-white border-2  rounded-[100px] flex w-[160px] md:w-[600px] lg:w-[600px] text-[14px] justify-between"
        >
          <input
            value={inputValue}
            onChange={handleInputChange}
            className="text-white bg-transparent px-2 w-[100%] outline-0 border-0"
            name="movie"
            type="text"
            placeholder="Search movie"
          />
          <button type="submit" className="text-white px-1 text-[18px]">
            <IoSearchOutline />
          </button>
        </form>
      </nav>
    </header>
  );
}

export default Navbar;
