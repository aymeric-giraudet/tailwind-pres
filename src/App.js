import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <>
      <nav className="flex items-center mx-auto justify-between flex-wrap p-3 border-b max-w-screen-xl">
        <div className="flex items-center flex-shrink-0 leading-none text-white mr-6">
          <img src={logo} width={42} height={42} />
          <span className="ml-1 font-semibold text-l tracking-tight text-indigo-800">
            ESPACE
            <br /> CLIENT
          </span>
        </div>
        <div className="block lg:hidden"></div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm pl-12 lg:flex-grow text-l font-semibold">
            <div className="mr-6 lg:inline-block border-orange-600 border-b-4">
              <a
                href="#responsive-header"
                className="block text-indigo-800 hover:text-black mt-4 lg:mt-0"
              >
                MES CONTRATS
              </a>
            </div>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-indigo-800 hover:text-black mr-6"
            >
              MES DOCUMENTS
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-indigo-800 hover:text-black mr-6"
            >
              MES SINISTRES
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-indigo-800 hover:text-black"
            >
              MES TRUCS
            </a>
          </div>
        </div>
      </nav>
      <div className="bg-gray-100 py-6">
        <div className="p-4 bg-white rounded-lg mx-auto text-justify max-w-screen-md">
          <p>
            Splice the main brace heave down pink killick wherry Spanish Main
            jib Letter of Marque log mizzen. Bilged on her anchor Corsair Blimey
            flogging Privateer grapple list Plate Fleet hail-shot killick. Line
            to go on account boatswain maroon no prey, no pay strike colors come
            about hang the jib hardtack splice the main brace. Bilge rat main
            sheet lateen sail jib mutiny deadlights interloper six pounders
            strike colors carouser.
          </p>
          <p>
            Squiffy man-of-war lugger aft bounty fore avast Sail ho bilge six
            pounders. Fire ship galleon mizzenmast plunder Davy Jones' Locker
            long boat spyglass Blimey bring a spring upon her cable heave down.
            Coffer code of conduct maroon topsail provost parley ballast trysail
            Davy Jones' Locker Pieces of Eight.
          </p>
          <p>
            Piracy tender matey chase parrel swing the lead Arr clipper black
            spot provost. Bilge scurvy yo-ho-ho driver jolly boat hardtack
            barque square-rigged grog blossom flogging. Gally gabion come about
            pillage Arr hardtack scallywag lookout holystone dance the hempen
            jig. Tackle maroon boom list quarterdeck warp hulk transom league
            nipper. Spike piracy scourge of the seven seas scuppers stern
            cutlass bilged on her anchor bilge blow the man down bilge rat.
          </p>
          <p>
            Belay hail-shot jury mast quarterdeck hogshead loaded to the
            gunwalls shrouds fathom grog blossom Shiver me timbers. Letter of
            Marque lanyard prow main sheet lookout trysail sutler gibbet capstan
            lee. Broadside piracy jack Plate Fleet holystone scuppers nipperkin
            swab Buccaneer aye. Spanker quarterdeck lookout boatswain spirits
            jury mast trysail stern chandler jack. Grapple bilge water Nelsons
            folly draft fire ship to go on account Jack Ketch Sink me jury mast
            strike colors. Black jack Gold Road American Main gibbet hail-shot
            chantey rum bilge crow's nest Jack Tar.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
