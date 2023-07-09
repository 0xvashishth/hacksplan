import OnGoing from "./ongoing";

function Home() {
  return (
    <>
      <div class="w-full pt-10 bg-white shadow dark:bg-gray-800">
        <div
          id="fullWidthTabContent"
          class="border-gray-200 dark:border-gray-600"
        >
          <h1 class="mb-4 text-center text-3xl font-extrabold text-gray-400 md:text-5xl lg:text-6xl">
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Let's Organize
            </span>{" "}
            In Better Way.
          </h1>
          <p class="text-lg text-center font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Here at Hacksplan we provide variety of tools and resources to make event planning more efficient and effective.
          </p>

          <div
            class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
            id="stats"
            role="tabpanel"
            aria-labelledby="stats-tab"
          >
            <h3 class="mt-7  mb-4 text-center text-3xl font-extrabold text-gray-400 md:text-4xl lg:text-5xl">
              <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                HacksPlan
              </span>{" "}
              Statistics
            </h3>
            <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl font-extrabold">100+</dt>
                <dd class="text-gray-500 dark:text-gray-400">Organizers</dd>
              </div>
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl font-extrabold">1000+</dt>
                <dd class="text-gray-500 dark:text-gray-400">Communities</dd>
              </div>
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl font-extrabold">1000+</dt>
                <dd class="text-gray-500 dark:text-gray-400">Hackathons</dd>
              </div>
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl font-extrabold">2k+</dt>
                <dd class="text-gray-500 dark:text-gray-400">Contributors</dd>
              </div>
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl font-extrabold">90+</dt>
                <dd class="text-gray-500 dark:text-gray-400">
                  Sponsorship Contacts
                </dd>
              </div>
              <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl font-extrabold">6k+</dt>
                <dd class="text-gray-500 dark:text-gray-400">Blogs</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* <OnGoing /> */}

      <div class="w-full p-4 text-center bg-white border-gray-200 shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h3 class="pt-4 mb-4 text-center text-3xl font-extrabold text-gray-400 md:text-3xl lg:text-4xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Let's
          </span>{" "}
          Contribute
        </h3>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Stay up to date and move forward with your Plans 🎉🎉
        </p>
        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a className="dark:text-gray-400" href="https://github.com/vasu-1">
            Made with 💗 by{" "}
            <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Vashishth Patel
            </span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
