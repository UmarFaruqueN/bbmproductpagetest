import React, { useState } from "react";

export default function RightSection(props) {
     const [clicked, setClicked] = useState({ white: true, black: false, red: false });
     const white = () => {
          setClicked({ white: true, black: false, red: false });
          props.setImageData(null);
          props.setImageData(props?.fullData?.solids?.white);
     };
     const black = () => {
          setClicked({ white: false, black: true, red: false });
          props.setImageData(null);
          props.setImageData(props?.fullData?.solids?.black);
     };
     const red = () => {
          setClicked({ white: false, black: false, red: true });
          props.setImageData(null);
          props.setImageData(props?.fullData?.solids?.red);
     };
     return (
          <div className="container pl-10">
               <div>
                    <div className="pt-10">
                         <h1 className="font-bold text-6xl pb-3">{props?.fullData?.name}</h1>
                         <h2 className="text-xl">
                              ₹{props?.fullData?.price}{" "}
                              <s>
                                   ₹{" "}
                                   {Math.round(
                                        props?.fullData?.price - (props?.fullData?.price * props?.fullData?.discount) / 100
                                   )}
                              </s>
                         </h2>
                    </div>
                    <div className=" w-30 flex pt-10">
                         {props?.fullData?.types?.map((obj) => (
                              <div className="flex justify-around items-center h-24 w-24  rounded-md border border-zinc-500 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] outline-1  mr-4">
                                   <h1 className="font-bold">{obj}</h1>
                              </div>
                         ))}
                    </div>
                    <div className="pt-10 border-b border-slate-800">
                         <div className="grid grid-cols-4 gap-4 auto-rows-max">
                              <div className=""> Solid</div>
                              <div className="col-span-3  flex">
                                   {!clicked.white ? (
                                        <div
                                             onClick={white}
                                             className="h-5 w-5 bg-white hover:bg-slate-100 rounded-full ml-2 mr-2 mt-1 cursor-pointer "
                                        />
                                   ) : (
                                        <div className="h-5 w-5 bg-white hover:bg-slate-100 rounded-full ml-2 mr-2 mt-1 outline outline-offset-2 outline-white" />
                                   )}
                                   {!clicked.black ? (
                                        <div
                                             onClick={black}
                                             className="h-5 w-5 bg-black hover:bg-slate-100 rounded-full ml-2 mt-1 mr-2 cursor-pointer"
                                        />
                                   ) : (
                                        <div className="h-5 w-5 bg-black hover:bg-slate-100 rounded-full ml-2 mt-1 mr-2 outline outline-offset-2 outline-black " />
                                   )}
                                   {!clicked.red ? (
                                        <div
                                             onClick={red}
                                             className="h-5 w-5 bg-red-600 hover:bg-slate-100 rounded-full ml-2 mt-1 mr-2 cursor-pointer"
                                        />
                                   ) : (
                                        <div className="h-5 w-5 bg-red-600 hover:bg-slate-100 rounded-full ml-2 mt-1 mr-2 outline outline-offset-2 outline-red-600" />
                                   )}
                              </div>
                         </div>
                         <div className="grid grid-cols-4 gap-4 pt-10 pb-10">
                              <div className=""> Printed</div>
                              <div className="col-span-3 flex">
                                   <div className="h-5 w-5 bg-white hover:bg-slate-100 rounded-full ml-2 mt-1 cursor-pointer" />
                                   <div className="h-5 w-5 bg-black hover:bg-slate-100 rounded-full ml-2 mt-1 cursor-pointer" />
                                   <div className="h-5 w-5 bg-red-600 hover:bg-slate-100 rounded-full ml-2 mt-1 cursor-pointer" />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}
