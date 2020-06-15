import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Drawer.scss";
import { useCallback } from "react";

const handleClick = (evt, drawerRef, dismissDrawer) => {
  if (!drawerRef.current.contains(evt.target)) {
    dismissDrawer();
  }
};

function Drawer(props) {
  const drawerRef = useRef();
  const onClickOut = useCallback(
    () => (evt) => {
      handleClick(evt, drawerRef, props.onDismiss)
    },
    [props.onDismiss]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => document.addEventListener("click", onClickOut), []);

  useEffect(() => {
    return () => {
      document.removeEventListener("click", onClickOut);
    };
  });

  return (
    <div ref={drawerRef} className="drawer drawer--is-visible">
      <header className="drawer__header">
        <div className="app__container">
          <div className="header__context">
            <div className="header__icons">
              <button
                type="button"
                className="header__icons--back"
                onClick={props.onDismiss}
              >
                <FontAwesomeIcon icon={"arrow-left"} />
              </button>
            </div>
            <div className="header__title">{props.title}</div>
          </div>
        </div>
      </header>
      <div className="drawer__content">{props.children}</div>
    </div>
  );
}

export default Drawer;
