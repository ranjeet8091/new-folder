import { useEffect, useState, useRef } from "react";

type pageType = {
  id: number;
  body: string;
};
const FetchData = () => {
  const [page, setPages] = useState<pageType[] | undefined>(undefined);
  const [isLoading, setisLoading] = useState<boolean | undefined>(true);
  const [error, setError] = useState<string | undefined>(undefined);
  const [pageNo, setPageNo] = useState<number>(0);
  const abortuseRef = useRef<AbortController | null>(null);
  useEffect(() => {
    abortuseRef.current?.abort();
    abortuseRef.current = new AbortController();
    const start = pageNo * 10;
    setisLoading(true);
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=10`,
      {
        signal: abortuseRef.current.signal,
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        // setTimeout(() => {
        //   setisLoading(false);
        //   setPages(response);
        // }, 2000);
        setisLoading(false);
        setPages(response);
        console.log(response);
      })
      .catch((err) => {
        setisLoading(false);
        setError("Error Ocured");
        console.log(typeof err);
        console.log(err);
      });
  }, [pageNo]);

  if (isLoading) {
    return <div>Loading .......</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  if (page?.length == 0) {
    return <div>No Data Found</div>;
  }
  return (
    <>
      <button
        className="bg-green-400 p-3 rounded-2xl"
        onClick={() => {
          setPageNo(pageNo - 1);
        }}
      >
        Previos
      </button>
      <button
        className="bg-green-400 p-3 rounded-2xl"
        onClick={() => {
          setPageNo(pageNo + 1);
        }}
      >
        Next Page
      </button>
      <table border={1} className="border-5 border-black-500 m-4 ">
        <thead>
          <tr>
            <td>User ID</td>
            <td>User Boady</td>
          </tr>
        </thead>
        <tbody>
          {page?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FetchData;
