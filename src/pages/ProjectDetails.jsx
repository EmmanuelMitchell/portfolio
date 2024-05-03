import React from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetails({ item }) {
  const { id } = useParams();
  return (
    <div className="h-screen">
      <h4>Project Details</h4>
      {/* ProjectDetails {item.id} */}
      {/* <h2>{item.title}</h2>
       */}
    </div>
  );
}
