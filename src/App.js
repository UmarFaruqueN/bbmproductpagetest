import { useState } from "react";
import { Corousel, RightSection } from "./components";
import data from "./utlis/data/data.json";

function App() {
     const [imagedata, setImageData] = useState(data?.solids?.white);

     // const imagesdata = ["images/image111.webp", "images/image222.webp", "images/image333.webp"];
     // //const imagesdata = false

     return (
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-2 mr-2">
               <div className="h-screen">
                    <Corousel images={imagedata} />
               </div>
               <div className="h-screen">
                    <RightSection fullData={data} setImageData={setImageData} />
               </div>
          </div>
     );
}

export default App;
