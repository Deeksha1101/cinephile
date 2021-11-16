import React from "react";

// import img from "../Components/img/PosterComponent";
import PlayFilters from "../Components/PlayFilters/PlayFiltersComponent";

const Plays = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full lg:flex lg:flex-row-reverse gap-4">
          <div className="lg:w-3/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Play in NCR Delhi</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <img
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top/et00120993-gzavgewmke-portrait.jpg"
                  alt="playspic"
                  alt="kuchbhi"
                  title="Play"
                  subtitle="Akshara Theatra: Delhi"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 gap-3">
                <img
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMCBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00317106-qhbztmwbfb-portrait.jpg"
                  alt="playspicccc"
                  title="Qaidi"
                  subtitle="Akshara Theatra: Delhi"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <img
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMiBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00317082-nwyfaacgkv-portrait.jpg"
                  alt="playspicture"
                  title="Qaidi"
                  subtitle="Akshara Theatra: Delhi"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <img
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top/et00313458-fkmmbfmbdr-portrait.jpg"
                  alt="playsimage"
                  title="Famous"
                  subtitle="Akshara Theatra: Delhi"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <img
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNCBOb3Ygb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00305723-sptkafhrzz-portrait.jpg"
                  alt="playspictr"
                  title="Qaidi"
                  subtitle="Akshara Theatra: Delhi"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <img
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAxMCBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00317230-nukflffkdf-portrait.jpg"
                  alt="playspi"
                  title="Qaidi"
                  subtitle="Akshara Theatra: Delhi"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <img
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAxMSBOb3Y%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00317239-newcydyqja-portrait.jpg"
                  alt="playspicc"
                  title="Qaidi"
                  subtitle="Akshara Theatra: Delhi"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <img
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMSBOb3Ygb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00316660-hppnuhnrbq-portrait.jpg"
                  alt="plays"
                  title="Qaidi"
                  subtitle="Akshara Theatra: Delhi"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <PlayFilters
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
            </div>
            <div>
              <PlayFilters
                title="Language"
                tags={["English", "Hindi", "Tamil"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plays;
