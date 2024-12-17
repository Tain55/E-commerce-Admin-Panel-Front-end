/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SidebarSingleButton = ({ title, link }) => {
  return (
    <div className="mb-2">
      <Link
        to={link}
        className="btn w-100 text-start"
        style={{ background: "#d3e499" }}
        onMouseEnter={(e) => {
          //   e.target.style.background =
          //     "linear-gradient(to right, #ffb347, #ff7f32)";
          e.target.style.color = "black";
        }}
        onMouseLeave={(e) => {
          //   e.target.style.background = "#d3e499";
          e.target.style.color = "";
        }}
      >
        {title}
      </Link>
    </div>
  );
};

export default SidebarSingleButton;
