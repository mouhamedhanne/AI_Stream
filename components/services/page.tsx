import { CardHoverEffectDemo } from "../_components/UseCardEffect";

export default function page() {
  return (
    <div className=" bg-home_page">
      <div className="max-w-5xl mx-auto py-10">
        <div
          className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-home_secondary to-neutral-50 bg-opacity-50 mt-20"
        >
          Streamline your business with our services
        </div>
        <p
          className="mt-4 text-lg font-normal
          text-neutral-300 max-w-lg 
          text-center mx-auto"
        >
          From website design to social media management, We offer a wide range
          of services to help you grow your business.
        </p>
      </div>
      <CardHoverEffectDemo />
    </div>
  );
}
