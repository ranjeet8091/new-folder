import React, { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
};

const FetchTable = () => {
  const [Data, setData] = useState<User[]>([]);

  useEffect(() => {
    const FetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log(data);
      setData(data);
    };
    FetchData();
  }, []);

  return (
    <>
      <table className="w-7/9 m-3">
        <thead>
          <tr>
            <th className="border border-black">ID</th>
            <th className="border border-black">Name</th>
            <th className="border border-black">UserName</th>
            <th className="border border-black">Email</th>
            <th className="border border-black">Street</th>
            <th className="border border-black">City</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((item, index) => (
            <tr key={index}>
              <td className="border border-black">{item.id}</td>
              <td className="border border-black">{item.name}</td>
              <td className="border border-black">{item.username}</td>
              <td className="border border-black">{item.email}</td>
              <td className="border border-black">{item.address.street}</td>
              <td className="border border-black">{item.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FetchTable;
