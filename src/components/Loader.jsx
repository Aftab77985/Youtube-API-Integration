import React from "react";

function Loader() {
  return (
    <React.Fragment>
      <div className="ui active inverted dimmer">
        <div className="ui medium text loader">Loading</div>
      </div>
    </React.Fragment>
  );
}
export default Loader;
