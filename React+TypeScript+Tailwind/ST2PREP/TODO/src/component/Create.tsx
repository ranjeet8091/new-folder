import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Read from "./Read";



export type StudentType = {
  Name: string;
  Section: string;
};

const Create = () => {
  const navigate=useNavigate()
  const [Name, setName] = useState<string | undefined>(undefined);
  const [Section, setSection] = useState<string | undefined>(undefined);
  const [userAdded, setUserAdded] = useState<boolean>(false);
  const [Data, setData] = useState<StudentType[] | null>(null);
  const { index } = useParams();

  const handleSubmit = () => {
    let data = JSON.parse(localStorage.getItem("data") || "[]");
    data.push({ Name, Section });
    localStorage.setItem("data", JSON.stringify(data));
    setUserAdded(!userAdded);
    setName("");
    setSection("");
  };

  const handleEdit = () => {
    let data = JSON.parse(localStorage.getItem("data") || "[]");
    data=data.filter((_:StudentType,i:number)=>i!==Number(index))
    data.push({ Name, Section });
    localStorage.setItem("data", JSON.stringify(data));
    setName("");
    setSection("");
    setUserAdded(!userAdded);
    navigate("/")
  };

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("data") || "[]");
    setData(data);
     data=data.filter((_:StudentType,i:number)=>i==Number(index))
     setName(data.length > 0 ? data[0].Name : "");  
     setSection(data.length > 0 ? data[0].Section : "");
  }, [index]);
  return (
    <>
      <div className="flex justify-center  gap-8">
        <div className="m-6 bg-green-300 w-[30%] p-4 h-[40%] rounded-2xl">
          <input
            type="text"
            name="value"
            value={Name}
            id="name"
            className="border-2"
            placeholder="Enter Your Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            name="value"
            id="section"
            value={Section}
            className="border-2"
            placeholder="Enter Your Section"
            onChange={(e) => {
              setSection(e.target.value);
            }}
          />

          {
            !index &&  <button
            onClick={handleSubmit}
            className="bg-red-200 p-3 rounded-2xl m-4"
          >
            Submit
          </button>
          }
          {index &&  (
            <button
              onClick={handleEdit}
              className="bg-red-200 p-3 rounded-2xl m-4"
            >
              Update
            </button>
          )}
        </div>
        <div>
          <Read key={userAdded.toString()} />
        </div>
      </div>
    </>
  );
};

export default Create;
