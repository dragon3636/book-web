import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
const documentType = ["posts", "comments", "photos"];
const Content = () => {
  const [body, setBody] = useState([]);
  const [param, setParam] = useState("comments");
  const [scroll, setScroll] = useState(false);
  const buttonRef = useRef();
  useEffect(() => {
    document.title = `Data ${param}`;

    fetch(`https://jsonplaceholder.typicode.com/${param}`)
      .then((res) => res.json())
      .then((response) => {
        console.log("🚀 ~ file: Content.jsx:8 ~ fetch ~ response:", response);
        setBody(response);
      })
      .catch((err) => {
        console.log("🚀 ~ file: Content.jsx:7 ~ fetch ~ err:", err);
      });
  }, [param]);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {documentType.map((item) => (
        <div
          ref={buttonRef}
          className="btn__comment bg-violet-400 rounded-xl text-white font-bold text-base inline-block p-4 capitalize m-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          key={item}
          onClick={() => {
            setParam(item);
          }}
        >
          {item}{" "}
        </div>
      ))}
      <ul>
        {body?.length > 0 &&
          body.map((item) => {
            if (param === "comments") {
              return <li key={item.id}> {item.name}</li>;
            }
            return <li key={item.id}> {item.title}</li>;
          })}
      </ul>
      {scroll && (
        <button
          className="fixed right-5 bottom-5 bg-emerald-100 border-collapse p-4 rounded-lg hover:bg-emerald-300 active:bg-emerald-900"
          onClick={() => {
            document.documentElement.scrollTo({
              top: 0,
            });
          }}
        >
          {" "}
          Go to top
        </button>
      )}
    </div>
  );
};

export default Content;
