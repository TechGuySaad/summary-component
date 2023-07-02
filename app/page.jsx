"use client";
import axios from "axios";
import { useEffect, useState } from "react";

import Reaction from "../public/assets/images/icon-reaction.svg";
import Memory from "../public/assets/images/icon-memory.svg";
import Verbal from "../public/assets/images/icon-verbal.svg";
import Visual from "../public/assets/images/icon-visual.svg";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("http://localhost:3000/api");
      setData(result.data);
      console.log(result.data);
    }
    fetchData();
  }, []);

  return (
    <div className="body w-full h-screen flex  items-center justify-center">
      <div className="app-container flex bg-white shadow-2xl rounded-3xl h-fit items-center">
        <div className="result flex flex-col bg-indigo-600 rounded-3xl items-center justify-center gap-y-8 py-16 px-6 text-white">
          <h1 className="text-2xl font-bold opacity-40">Your Result</h1>
          <div className="score flex flex-col text-center rounded-full bg-black/5 p-16 w-fit h-fit">
            <h1 className="text-7xl font-bold">76</h1>
            <p className="font-semibold opacity-40">of 100</p>
          </div>

          <h2 className="text-3xl font-semibold">Great</h2>
          <p className="w-96 flex justify-center items-center text-center font-medium">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>

        <div className="summary px-10 w-fit h-full flex flex-col justify-center gap-y-5">
          <h1 className="font-bold text-2xl mb-5">Summary</h1>
          {data &&
            data.map((item, index) => {
              if (item.category === "Reaction") {
                return (
                  <div className="flex w-80   gap-x-20 px-2 items-center justify-between h-14 rounded-lg font-semibold bg-red-50 text-lg">
                    <div className="logo flex items-center justify-center gap-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="#F55"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.25"
                          d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
                        />
                      </svg>
                      <p className="text-red-500">{item.category}</p>
                    </div>

                    <div className="marks ">
                      {item.score}
                      <span className="opacity-40"> / 100</span>
                    </div>
                  </div>
                );
              }
              if (item.category === "Memory") {
                return (
                  <div className="flex w-80   gap-x-20 px-2 items-center justify-between h-14 rounded-lg font-semibold bg-yellow-50 text-lg">
                    <div className="logo flex items-center justify-center gap-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="#FFB21E"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.25"
                          d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"
                        />
                        <path
                          stroke="#FFB21E"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.25"
                          d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"
                        />
                        <path
                          stroke="#FFB21E"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.25"
                          d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"
                        />
                      </svg>
                      <p className="text-yellow-500">{item.category}</p>
                    </div>

                    <div className="marks ">
                      {item.score}
                      <span className="opacity-40"> / 100</span>
                    </div>
                  </div>
                );
              }
              if (item.category === "Verbal") {
                return (
                  <div className="flex w-80   gap-x-20 px-2 items-center justify-between h-14 rounded-lg font-semibold bg-green-50 text-lg">
                    <div className="logo flex items-center justify-center gap-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="#00BB8F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.25"
                          d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"
                        />
                      </svg>
                      <p className="text-green-500">{item.category}</p>
                    </div>

                    <div className="marks ">
                      {item.score}
                      <span className="opacity-40"> / 100</span>
                    </div>
                  </div>
                );
              }
              if (item.category === "Visual") {
                return (
                  <>
                    <div className="flex w-80   gap-x-20 px-2 items-center justify-between h-14 rounded-lg font-semibold bg-violet-50 text-lg">
                    <div className="logo flex items-center justify-center gap-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="#1125D6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.25"
                          d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
                        />
                        <path
                          stroke="#1125D6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.25"
                          d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
                        />
                      </svg>
                      <p className="text-violet-500">{item.category}</p>
                    </div>

                    <div className="marks ">
                      {item.score}
                      <span className="opacity-40"> / 100</span>
                    </div>
                  </div>

                  <button className="flex w-80   gap-x-20 px-2 items-center justify-center h-14  font-semibold bg-gray-700 text-lg text-white rounded-3xl mt-10 hover:bg-indigo-600 transition-colors ease-linear duration-700">Continue </button>
                  </>
                
                );
              }

            })}

            
        </div>
      </div>
    </div>
  );
}
