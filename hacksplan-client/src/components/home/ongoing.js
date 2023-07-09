import EventCard from "../eventcard/eventcard";
import axios from "axios";
import React from "react";

export default function OnGoing(){

    var [hackathons, sethackathons] = React.useState([]);

    React.useEffect(() => {
        axios
          .get(
            "https://devfolio.co/_next/data/0RHUwD5XSlAnVxYuOfYsX/hackathons.json"
          )
          .then((response) => {
            console.log(
              response.data.pageProps.dehydratedState.queries[0].state.data
                .open_hackathons
            );
            sethackathons(
              response.data.pageProps.dehydratedState.queries[0].state.data
                .open_hackathons.slice(0,5)
            );
          });
      }, []);


    return(
        <>
        <h2 class="pt-4 dark:bg-gray-800 text-center text-2xl font-extrabold text-gray-400 md:text-3xl lg:text-3xl">
              <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                OnGoing
              </span>{" "}
              Hackathons
            </h2>
            <div className="mt-6 justify-center dark:bg-gray-800 grid md:grid-cols-4 xl:grid-cols-5 sm:grid-cols-1">
            {hackathons.map((e, key) => {
          var link =  "https://" + e.slug + ".devfolio.co/";
          return (
            <div class="max-w-sm m-3 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#link">
                <img
                  class="rounded-t-lg"
                  src="/docs/images/blog/image-1.jpg"
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="#link">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {e.name}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Total Participants: {e.participants_count}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Starts At: {e.starts_at}
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Ends At: {e.ends_at}
                </p>
                <a
                  href={link}
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
            </div>
        </>
    );
}