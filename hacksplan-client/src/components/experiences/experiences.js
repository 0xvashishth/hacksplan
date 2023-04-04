import Experience from "./experiencees.json";

export default function Experiences() {
  var TextTruncate = require("react-text-truncate");

  return (
    <>
      <div className="mt-7">
        <h1 class="mb-4 text-center text-3xl font-extrabold text-gray-400 md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Event Organi
          </span>
          {""}
          zing Experiences 🕶
        </h1>
        <form>
          <div class="flex mt-14 justify-center">
            <label
              for="search-dropdown"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Your Email
            </label>
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              type="button"
            >
              All categories{" "}
              <svg
                aria-hidden="true"
                class="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              id="dropdown"
              class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Mockups
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Templates
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Design
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Logos
                  </button>
                </li>
              </ul>
            </div>
            <div class="relative w-96 rounded-xl">
              <input
                type="search"
                id="search-dropdown"
                class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search the experiences 😁..."
                required
              />
              <button
                type="submit"
                class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="mt-9 m-4 grid mb-8 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 lg:grid-cols-3">
        {Experience.experience.map((e, key) => {
          var link = "/experiences/exp?id=" + key;
          return (
            <a
              href={link}
              class="flex m-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white flex-col items-center justify-center p-8 text-center bg-white border border-gray-200 rounded md:rounded dark:bg-gray-800 dark:border-gray-700"
            >
              <blockquote class="max-w-1xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  {e.title}
                </h3>
                <p class="my-4">
                  <TextTruncate
                    line={2}
                    element="span"
                    truncateText="…"
                    text={e.description}
                    textTruncateChild={
                      <a className="text-blue-600">Read More</a>
                    }
                  />
                </p>
              </blockquote>
              <figcaption class="flex items-center justify-center space-x-3">
                <img
                  class="rounded-full w-9 h-9"
                  src={e.img}
                  alt="profileicture"
                />
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>{e.name}</div>
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    {e.designation}
                  </div>
                </div>
              </figcaption>
            </a>
          );
        })}

        {/* <a
          href="/experiences/1"
          class="flex m-4 flex-col items-center justify-center p-8 text-center bg-white border border-gray-200 rounded md:rounded dark:bg-gray-800 dark:border-gray-700"
        >
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Solid foundation for any project
            </h3>
            <p class="my-4">
              Designing with Figma components that can be easily translated to
              the utility classes of Tailwind CSS is a huge timesaver!"
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
              alt="profileicture"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Roberta Casas</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Lead designer at Dropbox
              </div>
            </div>
          </figcaption>
        </a>
        <a
          href="/experiences/1"
          class="flex m-4 flex-col items-center justify-center p-8 text-center bg-white border border-gray-200 rounded md:rounded dark:bg-gray-800 dark:border-gray-700"
        >
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Mindblowing workflow
            </h3>
            <p class="my-4">
              Aesthetically, the well designed components are beautiful and will
              undoubtedly level up your next application."
            </p>
          </blockquote>
          <a class="flex items-center justify-center space-x-3">
            <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="profileicture"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Jese Leos</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                Software Engineer at Facebook
              </div>
            </div>
          </a>
        </a>
        <a
          href="/experiences/1"
          class="flex m-4 flex-col items-center justify-center p-8 text-center bg-white border border-gray-200 rounded md:rounded dark:bg-gray-800 dark:border-gray-700"
        >
          <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              Efficient Collaborating
            </h3>
            <p class="my-4">
              You have many examples that can be used to create a fast prototype
              for your team."
            </p>
          </blockquote>
          <figcaption class="flex items-center justify-center space-x-3">
            <img
              class="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
              alt="profileicture"
            />
            <div class="space-y-0.5 font-medium dark:text-white text-left">
              <div>Joseph McFall</div>
              <div class="text-sm text-gray-500 dark:text-gray-400">
                CTO at Google
              </div>
            </div>
          </figcaption>
        </a> */}
      </div>
    </>
  );
}