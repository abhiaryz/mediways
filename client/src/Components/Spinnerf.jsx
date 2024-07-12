import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function Spinnerf() {
  const transparentBgStyle = {
    background: "rgba(255, 255, 255, 0.5)",
    zIndex: 999,
  };

  return (
    <section
      className="items-center justify-center w-screen h-screen fixed flex top-0 left-0"
      style={transparentBgStyle}
    >
      <CircularProgress />
    </section>
  );
}

export default Spinnerf;
