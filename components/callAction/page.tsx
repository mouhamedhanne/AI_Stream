import { Button } from "../ui/button";

export default function page() {
  return (
    <div className="flex  pb-10 justify-center items-center space-x-4">
      <button
        className="inline-flex items-center text-white justify-center whitespace-nowrap
       rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none
         disabled:opacity-50 border border-input border-home_secondary bg-home_page
          hover:bg-home_secondary hover:text-white h-11 rounded-md px-8"
      >
        Start on github (-6k)
      </button>{" "}
      <Button className="bg-home_secondary">contact</Button>
    </div>
  );
}
