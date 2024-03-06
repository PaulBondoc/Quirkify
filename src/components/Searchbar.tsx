import { KeyboardEvent } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Searchbar = () => {
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`/search?q=${searchKey}`);
    }
  };
  return (
    <>
      <div className="w-full flex items-center gap-[5px] bg-black rounded-[5px]">
        <input
          type="text"
          className="ps-5 py-[10px] w-full xs:w-[300px] text-[14px] outline-none bg-transparent"
          placeholder="Search Game..."
          onChange={(e) => setSearchKey(e.target.value)}
          onKeyDown={handleSearch}
        />

        <Link to={`/search?q=${searchKey}`}>
          <FaSearch className="me-5 text-[15px] cursor-pointer" />
        </Link>
      </div>
    </>
  );
};

export default Searchbar;
