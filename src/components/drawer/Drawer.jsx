import React, { useRef, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Drawer.scss";

const handleClick = (evt, drawerRef, setIsVisible) => {
  if (drawerRef.current && !drawerRef.current.contains(evt.target)) {
    setIsVisible(false);
  }
};

const handleKeyPress = (evt, setIsVisible) => {
  if (evt.keyCode === 27) {
    setIsVisible(false);
  }
};

function Drawer({ children, title, onDismiss, history }) {
  const drawerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const historyListener = useRef();
  const previousVisiblity = useRef(isVisible);
  const onClickOut = (evt) => handleClick(evt, drawerRef, setIsVisible);
  const onKeyPress = (evt) => handleKeyPress(evt, setIsVisible);

  useEffect(
    () => {
      document.addEventListener("click", onClickOut);
      document.addEventListener("keyup", onKeyPress);
      historyListener.current = history.listen((location, action) =>
        setIsVisible(false)
      );
      setIsVisible(true);

      return () => {
        document.removeEventListener("click", onClickOut);
        document.removeEventListener("keyPress", onKeyPress);
        historyListener.current();
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    if (!isVisible && previousVisiblity.current) {
      setTimeout(() => onDismiss(), 300);
    }

    previousVisiblity.current = isVisible;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  return (
    <div
      ref={drawerRef}
      className={`drawer ${isVisible ? "drawer--is-visible" : ""}`}
    >
      <header className="drawer__header">
        <div className="app__container">
          <div className="header__context">
            <div className="header__icons">
              <button
                type="button"
                className="header__icons--back"
                onClick={onDismiss}
              >
                <FontAwesomeIcon icon={"arrow-left"} />
              </button>
            </div>
            <div className="header__title">{title}</div>
          </div>
        </div>
      </header>
      <div className="drawer__content">{children}</div>
    </div>
  );
}

export default withRouter(Drawer);
