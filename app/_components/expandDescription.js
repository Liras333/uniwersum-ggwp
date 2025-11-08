"use client";

import { useState } from "react";

export default function ExpandDescription({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      {isExpanded ? children : `${children.slice(0, 500)}... `}
      <button
        className="text-primary-300 underline hover:text-primary-200 cursor-pointer"
        onClick={() => setIsExpanded((expand) => !expand)}
      >
        Pokaż {isExpanded ? "mniej" : "więcej"}
      </button>
    </>
  );
}
