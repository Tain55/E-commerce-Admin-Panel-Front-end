import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse } from "react-bootstrap";

const SidebarButton = ({ title, subButtons }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle button state
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-2">
      <button
        className="btn w-100 text-start f-b"
        onClick={toggleCollapse}
        style={{
          background: "#d3e499",
        }}
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
      </button>
      <Collapse in={isOpen}>
        <ul className="list-unstyled ms-3">
          {subButtons.map((button, index) => (
            <li key={index}>
              <Link
                to={button.link}
                className="d-block text-decoration-none text-light"
                style={{
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.color = "red")}
                onMouseLeave={(e) => (e.target.style.color = "")}
              >
                {button.name}
              </Link>
            </li>
          ))}
        </ul>
      </Collapse>
    </div>
  );
};

export default SidebarButton;
