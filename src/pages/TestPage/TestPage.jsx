import React from "react";
import { useParams } from "react-router-dom";

export default function TestPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>TestPage</h1>
      <div>{id}</div>
    </div>
  );
}
