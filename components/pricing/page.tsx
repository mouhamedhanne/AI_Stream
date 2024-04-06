import Logo_stream from "@/public/images/AiStream.png";
import Image from "next/image";

export default function page() {
  return (
    <div
      className="bg-home_page flex w-full flex-col items-center gap-6 bg-background 
    px-4 py-4 text-foreground lg:p-16"
    >
      <span
        className="inline-flex items-center rounded-md font-medium 
            forced-colors:outline bg-orange-500/15 text-orange-700 
            group-data-[hover]:bg-orange-500/25 dark:bg-orange-500/10 
            dark:text-orange-400 dark:group-data-[hover]:bg-orange-500/20 
            px-1.5 py-0.5 text-sm/5 sm:text-xs/5 gap-x-1.5"
      >
        Passe à l'action ⚡️
      </span>
      <h2
        className="scroll-m-20 font-caption text-3xl font-semibold tracking-tight pb-4
        text-white transition-colors first:mt-0 relative text-center !leading-tight"
      >
        Trouvez le Plan{" "}
        <b className="relative inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="255"
            height="36"
            viewBox="0 0 255 36"
            fill="none"
            className="absolute -bottom-2 left-[-50%] top-5 z-0  inline-block w-[150%] 
            text-home_secondary"
          >
            <path
              d="M2.99975 17.6351C116.771 12.3405 178.178 12.7036 252 18.0966"
              stroke="currentColor"
              stroke-width="5.75696"
              stroke-linecap="round"
            ></path>
          </svg>
          <span className="relative z-10 ">Parfait</span>{" "}
        </b>{" "}
        pour Votre{" "}
        <b className="relative inline-block">
          <svg
            className="absolute z-0 h-[100%] w-[calc(100%+1rem)] fill-home_secondary"
            xmlns="http://www.w3.org/2000/svg"
            width="223"
            height="62"
            viewBox="0 0 223 62"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <path d="M45.654 53.62c17.666 3.154 35.622 4.512 53.558 4.837 17.94.288 35.91-.468 53.702-2.54 8.89-1.062 17.742-2.442 26.455-4.352 8.684-1.945 17.338-4.3 25.303-7.905 3.94-1.81 7.79-3.962 10.634-6.777 1.38-1.41 2.424-2.994 2.758-4.561.358-1.563-.078-3.143-1.046-4.677-.986-1.524-2.43-2.96-4.114-4.175a37.926 37.926 0 0 0-5.422-3.32c-3.84-1.977-7.958-3.563-12.156-4.933-8.42-2.707-17.148-4.653-25.95-6.145-8.802-1.52-17.702-2.56-26.622-3.333-17.852-1.49-35.826-1.776-53.739-.978-8.953.433-17.898 1.125-26.79 2.22-8.887 1.095-17.738 2.541-26.428 4.616-4.342 1.037-8.648 2.226-12.853 3.676-4.197 1.455-8.314 3.16-12.104 5.363-1.862 1.13-3.706 2.333-5.218 3.829-1.52 1.47-2.79 3.193-3.285 5.113-.528 1.912-.127 3.965.951 5.743 1.07 1.785 2.632 3.335 4.348 4.68 2.135 1.652 3.2 2.672 2.986 3.083-.18.362-1.674.114-4.08-1.638-1.863-1.387-3.63-3.014-4.95-5.09C.94 35.316.424 34.148.171 32.89c-.275-1.253-.198-2.579.069-3.822.588-2.515 2.098-4.582 3.76-6.276 1.673-1.724 3.612-3.053 5.57-4.303 3.96-2.426 8.177-4.278 12.457-5.868 4.287-1.584 8.654-2.89 13.054-4.036 8.801-2.292 17.74-3.925 26.716-5.19C70.777 2.131 79.805 1.286 88.846.723c18.087-1.065 36.236-.974 54.325.397 9.041.717 18.07 1.714 27.042 3.225 8.972 1.485 17.895 3.444 26.649 6.253 4.37 1.426 8.697 3.083 12.878 5.243a42.11 42.11 0 0 1 6.094 3.762c1.954 1.44 3.823 3.2 5.283 5.485a12.515 12.515 0 0 1 1.63 3.88c.164.706.184 1.463.253 2.193-.063.73-.094 1.485-.247 2.195-.652 2.886-2.325 5.141-4.09 6.934-3.635 3.533-7.853 5.751-12.083 7.688-8.519 3.778-17.394 6.09-26.296 7.998-8.917 1.86-17.913 3.152-26.928 4.104-18.039 1.851-36.17 2.295-54.239 1.622-18.062-.713-36.112-2.535-53.824-6.23-5.941-1.31-5.217-2.91.361-1.852"></path>
          </svg>
          <span className="relative z-10">Stratégie</span>
        </b>
        <span className="italic">de Contenu</span>
      </h2>
      <div className="flex flex-col items-center justify-center lg:flex-row ">
        <div
          className="overflow-hidden shadow w-full max-w-[480px] rounded-lg border 
        border-home_secondary bg-card/20 py-6 mb-4 lg:mb-0"
        >
          <div className="relative flex flex-col pt-4 md:pt-6 lg:pt-8">
            <div className="mt-6 px-6 last-of-type:pt-0 md:px-8 lg:px-10 flex flex-col gap-2">
              <span
                className="w-fit inline-flex items-center 
            rounded-md font-medium forced-colors:outline 
            bg-yellow-400/20 text-home_secondary group-data-[hover]:bg-yellow-400/30 
            dark:bg-yellow-400/10 dark:text-yellow-300 dark:group-data-[hover]:bg-yellow-400/15 
            px-1.5 py-0.5 text-sm/5 sm:text-xs/5 gap-x-1.5"
              >
                Plus grosse valeur
              </span>
              <div className="flex gap-4">
                <span className="relative flex shrink-0 overflow-hidden size-16 rounded-none shadow shadow-white/10">
                  <Image src={Logo_stream} alt="Logo AiStream" />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-medium text-white">
                    AiStream FuelAI
                  </p>
                  <p className="text-[15px] font-medium text-muted-foreground">
                    Offre haut de gamme idéal pour les entreprises
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 justify-center pt-3">
              <div className="relative w-fit">
                <p className="whitespace-nowrap text-3xl font-bold text-[#A8A29E]">
                  250 €
                </p>
                <div className="absolute inset-x-0 top-4 h-0.5 bg-red-500"></div>
              </div>
              <p className="whitespace-nowrap text-4xl font-bold text-white">
                149 €
              </p>
              <span
                className="inline-flex items-center rounded-md font-medium forced-colors:outline 
            bg-red-500/15 text-red-700 group-data-[hover]:bg-red-500/25 dark:bg-red-500/10 
            dark:text-red-400 dark:group-data-[hover]:bg-red-500/20 px-1.5 py-0.5 text-sm/5 
            sm:text-xs/5 gap-x-1.5"
              >
                -101 €
              </span>
            </div>
            <div className="mt-6 flex flex-col gap-6 px-6 last-of-type:pt-0 md:px-8 lg:px-10">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-check text-home_secondary"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="flex-1 text-base text-gray-300">
                    2 publications par jour générées par l'IA sur 3 réseaux
                    sociaux (ex: Facebook, Twitter, LinkedIn)
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-check text-home_secondary"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="flex-1 text-base text-gray-300">
                    Publication automatisée sur les 3 réseaux incluse
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-check text-home_secondary"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="flex-1 text-base text-gray-300">
                    Bibliothèque étendue de modèles IA (différents formats)
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-check text-home_secondary"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="flex-1 text-base text-gray-300">
                    Analyse mensuelle des performances
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-check text-home_secondary"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="flex-1 text-base text-gray-300">
                    Support prioritaire
                  </span>
                </li>
              </ul>
            </div>
            <div className="px-6 mt-10 last-of-type:pt-0 md:px-8 lg:px-10 mt-0 flex flex-col gap-4  py-4 pb-6">
              <button
                className="inline-flex items-center justify-center text-sm ring-offset-background 
              transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
              focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-home_secondary
              text-primary-foreground hover:bg-home_secondary/90 h-11 rounded-md px-8 font-bold"
              >
                Deviens un FuelAI
              </button>
            </div>
          </div>
        </div>
        <div
          className="overflow-hidden shadow w-full max-w-[412px] border-l rounded-b-lg border-b border-r
         border-t border-primary/50 bg-card/80 lg:rounded-l-none lg:rounded-r-lg lg:rounded-tl-none lg:border-b
          lg:border-l-0"
        >
          {/** */}
          <div className="overflow-hidden shadow w-full max-w-[480px] rounded-r-lg rounded-l-none border border-home_secondary bg-card/20">
            <div className="relative flex flex-col pt-4 md:pt-6 lg:pt-8">
              <div className="mt-6 px-6 last-of-type:pt-0 md:px-8 lg:px-10 flex flex-col gap-2">
                <div className="flex gap-4">
                  <span className="relative flex shrink-0 overflow-hidden size-16 rounded-none shadow shadow-black/10">
                    <Image src={Logo_stream} alt="Logo AiStream" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <p className="text-lg font-medium">AiStream StreamFlow</p>
                    <p className="text-[15px] font-medium text-muted-foreground">
                      Idéal pour les petites entreprises et entrepreneurs
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="relative w-fit">
                  <p className="whitespace-nowrap text-3xl font-bold text-[#A8A29E]">
                    120 €
                  </p>
                  <div className="absolute inset-x-0 top-4 h-0.5 bg-red-500"></div>
                </div>
                <p className="whitespace-nowrap text-4xl font-bold">59 €</p>
                <span
                  className="inline-flex items-center rounded-md font-medium forced-colors:outline 
            bg-red-500/15 text-red-700 group-data-[hover]:bg-red-500/25 dark:bg-red-500/10 
            dark:text-red-400 dark:group-data-[hover]:bg-red-500/20 px-1.5 py-0.5 text-sm/5 
            sm:text-xs/5 gap-x-1.5"
                >
                  -61 €
                </span>
              </div>
              <div className="mt-6 flex flex-col gap-6 px-6 last-of-type:pt-0 md:px-8 lg:px-10">
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check text-home_secondary"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="flex-1 text-base text-muted-foreground">
                      1 publication par jour générée par l'IA sur 1 réseau
                      social (ex: Facebook ou LinkedIn)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check text-home_secondary"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="flex-1 text-base text-muted-foreground">
                      Publication automatisée incluse
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check text-home_secondary"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="flex-1 text-base text-muted-foreground">
                      Bibliothèque de modèles de contenu IA de base
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check text-home_secondary"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="flex-1 text-base text-muted-foreground">
                      Support par email
                    </span>
                  </li>
                </ul>
              </div>
              <div className="px-6 mt-10 last-of-type:pt-0 md:px-8 lg:px-10 mt-0 flex flex-col gap-4  py-4 pb-6">
                <button
                  className="inline-flex items-center justify-center text-sm ring-offset-background 
              transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
              focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-home_secondary 
              text-primary-foreground hover:bg-home_secondary/90 h-11 rounded-md px-8 font-bold"
                >
                  Deviens un StreamFlow
                </button>
              </div>
            </div>
          </div>
          {/** */}
        </div>
      </div>
    </div>
  );
}
