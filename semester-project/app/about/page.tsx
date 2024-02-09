"use client";
import React from "react";
import ItemSplash from "@/components/ItemSplash";

function Page() {
  if (typeof window !== "undefined") {
    document.title = "GymRoo - About";
  }
  return (
    <div className="w-full">
      <ItemSplash
        i={0}
        title="Our Story"
        image="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="p-10 lg:flex lg:px-32 gap-5 ">
        <img
          className="lg:h-64 xl:h-96"
          src="https://www.irontribe.com.au/wp-content/uploads/2023/08/Strength-Training-Olympic-Weightlifting.jpg"
        />

        <div className="flex flex-col items-center justify-center mt-5 gap-5">
          <h1 className="text-xl md:text-2xl self-start lg:self-center ">
            The Journey Begins
          </h1>
          <div className="flex flex-col w-full font-sans font-normal text-sm md:text-lg lg:text-xl lg:w-2/3">
            Founded in 1990, GymRoo began as a vision to revolutionize the
            fitness industry. We set out on a journey to provide fitness
            enthusiasts with premium weight plates and a source of inspiration
            for their fitness journey.
          </div>
        </div>
      </div>

      <div className="p-10 lg:flex lg:px-32 gap-5 bg-[#265138ff] text-white">
        <img
          className="lg:h-64 xl:h-96 order-2"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Lasha_Talakhadze_Rio_2016.jpg/1200px-Lasha_Talakhadze_Rio_2016.jpg"
        />
        <div className="flex flex-col items-center justify-center mt-5 order-1 gap-5">
          <h1 className="text-xl md:text-2xl self-start lg:self-center">
            Crafting Quality
          </h1>
          <div className="flex flex-col w-full font-sans font-normal text-sm  md:text-lg lg:text-xl lg:w-2/3">
            From day one, our commitment to quality has been unwavering. Each
            weight plate is a testament to our dedication to craftsmanship and
            durability. We believe that fitness equipment should not only meet
            but exceed expectations, empowering individuals to push their limits
            and achieve their fitness goals.
          </div>
        </div>
      </div>

      <div className="p-10 lg:flex lg:px-32 gap-5 ">
        <img
          className="lg:h-64 xl:h-96"
          src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="flex flex-col items-center justify-center mt-5 gap-5">
          <h1 className="text-xl md:text-2xl self-start lg:self-center ">
            Building Community
          </h1>
          <div className="flex flex-col w-full font-sans font-normal text-sm md:text-lg lg:text-xl lg:w-2/3">
            Beyond selling weight plates, GymRoo aims to foster a community that
            encourages and supports one another. Our online platforms serve as a
            hub for sharing stories, fitness tips, and celebrating achievements.
            We are not just about selling products; we are about building
            connections and inspiring a healthier way of life.
          </div>
        </div>
      </div>
      <div className="p-10 lg:flex lg:px-32 gap-5 bg-[#265138ff] text-white">
        <img
          className="lg:h-64 xl:h-96 order-2"
          src="https://images.unsplash.com/photo-1689877020200-403d8542d95d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <div className="flex flex-col items-center justify-center mt-5 order-1 gap-5">
          <h1 className="text-xl md:text-2xl self-start lg:self-center">
            Join Us on the Journey
          </h1>
          <div className="flex flex-col w-full font-sans font-normal text-sm  md:text-lg lg:text-xl lg:w-2/3">
            As we reflect on our journey so far, we are grateful for the
            incredible individuals who have chosen GymRoo as their fitness
            partner. Whether you are a seasoned athlete or just starting out, we
            invite you to join us on this journey toward better health and
            wellness.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
