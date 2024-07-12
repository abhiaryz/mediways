import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <section
      id="PageNotFound"
      className="flex w-screen h-screen flex-col gap-4 items-center"
      style={{paddingTop:"10vh"}}
    >
      <img src="/assets\images\PageNotFound.png" className="object-contain w-2/5" alt="" />
      <p className="text-2xl ">We can’t seem to find the page you are looking for</p>
      <Link to="/">
        <button className="button-rounded">Back</button>
      </Link>
    </section>
  );
}
