import EventCard from "../eventcard/eventcard";

function onGoing(){
    return(
        <>
        <h3 class="pt-4 bg-gray-800 text-center text-3xl font-extrabold text-gray-400 md:text-4xl lg:text-5xl">
              <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                HacksPlan
              </span>{" "}
              Statistics
            </h3>
            <div className="mt-6 justify-center bg-gray-800 grid md:grid-cols-4 xl:grid-cols-5 sm:grid-cols-1">
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
                <EventCard/>
            </div>
        </>
    );
}

export default onGoing;