import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
const Paragraph = () => {
  const context = useContext(ThemeContext);
  return (
    <p
      className={`${context.theme === "dark" ? "bg-slate-800 text-white" : ""}`}
    >
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
      tempore molestias impedit quos perferendis, omnis dicta animi delectus
      praesentium vero nostrum, eius nisi perspiciatis voluptate magnam
      temporibus et hic sunt.e
    </p>
  );
};

export default Paragraph;
