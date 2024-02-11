import React from "react";
import ItemSplash from "@/components/ItemSplash";
import NavigateButton from "@/components/NavigateButton";

const NotFound = () => {
  // change document title
  if (typeof window !== "undefined") {
    document.title = "GymRoo - Not Found";
  }
  return (
    <div className="flex flex-col w-full items-center justify-start">
      <ItemSplash
        i={0}
        title="404 - Not Found"
        image="https://images.unsplash.com/photo-1559369064-c4d65141e408?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="text-lg my-10">
        Sorry, the page you are looking for does not exist.
      </div>
      <NavigateButton destination="/">Go To Home Page</NavigateButton>
    </div>
  );
};

export default NotFound;
