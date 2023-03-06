import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>
        Page not found...<Link to="/">Go home</Link>
      </h1>
    </div>
  );
}
