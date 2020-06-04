import React from "react";
import PropTypes from "prop-types";
import "./Navbar.scss";

const canvasStyle = {
  borderRadius: 'inherit',
  height: '100%',
  left: 0,
  position: 'absolute',
  top: 0,
  width: '100%'
}

const Navbar = props => {
  return (
    <header className="header">
      <div className="app__container">
        <div className="header__default">
          <a href="/">
            <svg
              viewBox="0 0 512 88"
              preserveAspectRatio="xMidYMid"
              className="header__brand"
            >
              <path d="M44.23 2.238L0 87.197h14.75l12.89-24.643h39.72l13.06 24.643h15.53L51.08 2.237h-6.848zm16.462 47.114H34.561l13.097-25.03 13.034 25.03zM198.748 2.238l-34.3 62.587L130.38 2.238h-5.966L111.05 87.202h13.396l8.347-52.92 28.81 52.92h5.734l29.021-52.815 8.065 52.815h13.395L204.912 2.238zm77.676 0l-44.229 84.959h14.749l12.89-24.643h39.718l13.062 24.643h15.53l-44.868-84.96h-6.852zm16.463 47.114h-26.13l13.096-25.03 13.034 25.03zm96.078-.79c4.974-1.818 8.87-4.572 11.586-8.176 2.831-3.763 4.116-10.332 4.116-14.846 0-5.74-2.012-10.645-5.98-14.58-3.891-3.864-8.996-6.412-15.163-7.578-4.072-.776-7.975-1.144-19.119-1.144h-21.282V87.2h13.23V51.34h8.091l27.47 35.862h17.36l-28.143-36.57c2.298-.505 5.779-1.32 7.834-2.07zm.362-15.875c-1.442 1.844-3.497 3.21-6.107 4.065-2.748.903-7.121 1.352-12.986 1.352l-13.88-.092V15.47h14.24c6.045 0 10.38.423 12.908 1.254 2.43.8 4.325 2.09 5.81 3.93 1.443 1.806 2.147 3.739 2.147 5.929.002 2.263-.69 4.262-2.132 6.104zm109.446-20.121C490.028 4.226 479.013 0 466.058 0c-8.007 0-15.564 1.94-22.447 5.777-6.898 3.84-12.415 9.223-16.41 15.994-3.988 6.785-6.023 14.241-6.023 22.179 0 11.926 4.45 22.223 13.216 30.618 8.753 8.375 19.634 12.625 32.334 12.625 12.557 0 23.348-4.276 32.084-12.683C507.563 66.083 512 55.673 512 43.57c0-12.215-4.455-22.645-13.227-31.003zm.272 30.977c0 5.859-1.433 11.246-4.244 16.028-2.813 4.779-6.79 8.6-11.821 11.355-5.047 2.767-10.619 4.172-16.548 4.172-8.88 0-16.57-3.044-22.852-9.056-6.264-5.984-9.443-13.428-9.443-22.13 0-5.884 1.431-11.295 4.27-16.076 2.833-4.786 6.833-8.645 11.89-11.471 5.06-2.835 10.485-4.27 16.139-4.27 5.747 0 11.268 1.437 16.402 4.274 5.132 2.831 9.16 6.65 11.974 11.34 2.811 4.684 4.233 10.012 4.233 15.834z"></path>
            </svg>
          </a>
          <div className="header__icons">
            <button type="button" className="header__icons--search">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <canvas
                height="0"
                width="0"
                style={canvasStyle}
              ></canvas>
            </button>
            <button type="button" className="header__icons--cart">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <sup className="counter">
                <span className="counter__value">0</span>
              </sup>
              <canvas
                height="0"
                width="0"
                style={canvasStyle}
              ></canvas>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

Navbar.propTypes = {};

export default Navbar;
