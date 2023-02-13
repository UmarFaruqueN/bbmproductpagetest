import { useState } from "react";
import { Circles } from "react-loader-spinner";

export default function Corousel(props) {
     const [index, setIndex] = useState(0);

     const next = () => {
          if (index === 2) {
               setIndex(0);
          } else {
               setIndex(index + 1);
          }
     };

     const prev = () => {
          if (index === 0) {
               setIndex(2);
          } else {
               setIndex(index - 1);
          }
     };
     return (
          <>
               <div className="flex items-center justify-around h-screen">
                    {!props.images[index] ? (
                         <Circles
                              height="80"
                              width="80"
                              color="#4fa94d"
                              ariaLabel="circles-loading"
                              wrapperStyle={{}}
                              wrapperClass=""
                              visible={true}
                         />
                    ) : (
                         <>
                              <div className="ml-4 ">
                                   <img src="icons/arrow_back.png" className="cursor-pointer" onClick={prev} alt="" />
                              </div>
                              <div>
                                   {" "}
                                   <img src={props.images[index]} className=" h-[80vh] w-5/5" alt="" />
                              </div>
                              <div className="">
                                   <img src="icons/arrow_front.png" alt="" className="cursor-pointer" onClick={next} />
                              </div>
                         </>
                    )}
               </div>
          </>
     );
}
