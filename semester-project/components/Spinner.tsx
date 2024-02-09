"use client";
import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { useContext } from "@/context/context";

function Spinner({ debug = false }: { debug?: boolean }) {
  const { isLoading } = useContext();
  return (
    <>
      {(isLoading || debug) && (
        <div className="mt-10">
          <MoonLoader loading={isLoading || debug} color="#007bff" />
        </div>
      )}
    </>
  );
}

export default Spinner;
