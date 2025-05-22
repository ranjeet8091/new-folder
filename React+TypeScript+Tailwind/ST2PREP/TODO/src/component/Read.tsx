import { useState, useEffect } from "react";
import { StudentType } from "./Create";
import { Link, useNavigate } from "react-router-dom";

const Read = () => {
  const [Data, setData] = useState<StudentType[] | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data") || "[]");
    setData(data);
  }, []);

  const HandleDelete = (index: number) => {
    let data = JSON.parse(localStorage.getItem("data") || "[]");
    data = data.filter((_: StudentType, i: number) => i !== index);
    setData(data);
    localStorage.setItem("data", JSON.stringify(data));
    navigate("/");
  };

  if (Data?.length == 0) {
    return (
      <div className="m-6 bg-red-300  p-4 h-[40%] rounded-2xl">
        <h1>No Data Found</h1>
      </div>
    );
  }
  return (
    <>
      <h1>Saved User</h1>
      {Data?.map((student, index) => {
        return (
          <div
            className="m-6 bg-green-300  p-4 h-[40%] rounded-2xl"
            key={index}
          >
            <h1>Name :{student.Name}</h1>
            <h1> Section:{student.Section}</h1>
            <button
              onClick={() => HandleDelete(index)}
              className="bg-red-200 p-3 rounded-2xl"
            >
              Delete
            </button>
            <Link to={`/update/${index}`}>
              {" "}
              <button className="bg-orange-200 p-3 rounded-2xl">Edit</button>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Read;
