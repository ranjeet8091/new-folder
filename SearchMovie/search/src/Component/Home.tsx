import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [MovieName, setMovieName] = useState("");
  const navigate = useNavigate();
  const HandleSubmit = async () => {
    const result = await fetch(
      `http://www.omdbapi.com/?t=${MovieName}&&apikey=8ab0c440`
    );
    const data = await result.json();
    console.log(data);
    if (!data.imdbID) {
      alert("no movie found");
      return;
    }
    navigate(`/detailid/${data.imdbID}`);
  };

  return (
    <div >
      <h1 className="flex justify-center text-red-500 font-bold m-5 text-3xl">
        TIWARI MOVIE{" "}
      </h1>
      <div className="flex justify-center">
        <input
          type="text"
          className="border-2  py-2 px-4 rounded-2xl mr-5 bg-red-300 "
          placeholder="Search Movie name"
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />
        <button
          className="bg-orange-200 rounded-2xl border-1 px-4 py-1"
          onClick={HandleSubmit}
        >
          Search
        </button>
      </div>

    </div>
  );
};

export default Home;
