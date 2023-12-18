"use client";
import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { useContext } from "@/context/context";

function Spinner() {
  const { isLoading } = useContext();
  return (
    <>
      {isLoading && (
        <div className="mt-10">
          <MoonLoader loading={isLoading} color="#007bff" />
        </div>
      )}
    </>
  );
}

export default Spinner;
