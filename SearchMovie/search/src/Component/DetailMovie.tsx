import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Loader } from "lucide-react";
interface MovieData {
  Title: string;
  Year: string;
  Director: string;
  Actors: string;
  Plot: string;
  Poster: string;
}

const DetailMovie = () => {
  const { imdbID } = useParams();
  const [data, setData] = useState<MovieData | null>(null);
  const [isloading, setisLoading] = useState(true);
  const nevigate = useNavigate();
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${imdbID}&&apikey=8ab0c440`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .then(() => setisLoading(false))
      .catch((err) => console.log(err));
  }, [imdbID]);

  if (isloading) {
    return <div className="flex justify-center align-center"><Loader size={48} fill="red" className="loader animate-spin" /></div>;
  }
  return (
    <div>
      {
        <div className="flex justify-center">
          <div className="flex  m-5 p-5 bg-red-300 rounded-2xl">
            <img src={data?.Poster} alt="poster" className="rounded-2xl" />
            <div className="flex flex-col justify-center m-5 p-3 bg-red-200 rounded-2xl">
              <h1 className="text-3xl font-semibold text-center bg-red-300 rounded-3xl p-3 m-2">
                {" "}
                <span className="font-bold ">Movie Name</span> :
                {data?.Title}
              </h1>
              <h1 className="text-3xl font-semibold text-center bg-red-300 rounded-3xl p-3 m-2">
                <span className="font-bold ">Year:</span> {data?.Year}
              </h1>
              <h1 className="text-3xl font-semibold text-center bg-red-300 rounded-3xl p-3 m-2"><span className="font-bold ">Director: </span>
                {data?.Director}
              </h1>
              <h1 className="text-3xl font-semibold text-center bg-red-300 rounded-3xl p-3 m-2"><span className="font-bold ">Actors: </span>{data?.Actors}</h1>
              <h1 className="text-3xl font-semibold text-center bg-red-300 rounded-3xl p-3 m-2"><span className="font-bold ">Plot: </span>{data?.Plot}</h1>
            </div>
          </div>
        </div>
      }
      <div className="flex justify-center">
      <button className=" bg-green-200 rounded-2xl p-2">
        <Link to="/">Go to Home</Link>
      </button>
      </div>
    </div>
  );
};

export default DetailMovie;
