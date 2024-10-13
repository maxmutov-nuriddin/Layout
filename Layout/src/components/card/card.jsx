// const PICS = [
//   "https://images.unsplash.com/photo-1542662565-7e4b66bae529?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=282&q=80",
//   "https://images.unsplash.com/photo-1525153537143-f88592837fb1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=332&q=80",
//   "https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
//   "https://images.unsplash.com/photo-1507400492013-162706c8c05e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=309&q=80",
//   "https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
//   "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80",
// ];

// const TITLES = ["Mountain", "Stars", "Skies", "Water", "Trips"];
// const TYPE = ["Guide", "Planner", "Discuss"];

// const Card = ({ idx, reflection }) => {
//   return (
//     <li className="gallery__card card w-56 h-72 absolute">
//       <div className="card__card h-full w-full">
//         <div className="card__content bg-gray-800 overflow-hidden relative h-full w-full rounded-md font-sans">
//           <img
//             className="card__image transform absolute h-full w-full inset-0 transform scale-110"
//             src={PICS[idx % PICS.length]}
//             alt={TITLES[idx % TITLES.length]}
//           />
//           <div className="card__details absolute inset-0 pt-52 flex items-center justify-center flex-col">
//             <div className="card__type text-gray-300 top-0 uppercase text-xs p-0 w-full text-center">
//               {TYPE[Math.floor(Math.random() * TYPE.length)]}
//             </div>
//             <h2 className="card__title p-2 text-white font-black text-xl text-center w-full pb-12">
//               {TITLES[idx % TITLES.length]}
//             </h2>
//           </div>
//           <div
//             className={`card__overlay z-50 absolute h-full w-full inset-0 ${
//               reflection ? "card__overlay--reflection" : ""
//             }`}
//           />
//         </div>
//       </div>
//       {reflection && (
//         <div
//           className="card__reflection absolute h-full w-full top-8 left-0 rounded-md overflow-hidden"
//           aria-hidden="true"
//         >
//           <div className="card__content bg-gray-800 overflow-hidden relative h-full w-full rounded-md font-sans">
//             <img
//               className="card__image transform absolute h-full w-full inset-0 transform scale-110"
//               src={PICS[idx % PICS.length]}
//               alt={TITLES[idx % TITLES.length]}
//             />
//             <div className="card__details absolute inset-0 pt-52 flex items-center justify-center flex-col">
//               <div className="card__type text-gray-300 top-0 uppercase text-xs p-0 w-full text-center">
//                 {TYPE[Math.floor(Math.random() * TYPE.length)]}
//               </div>
//               <h2 className="card__title p-2 text-white font-black text-xl text-center w-full pb-12">
//                 {TITLES[idx % TITLES.length]}
//               </h2>
//             </div>
//           </div>
//         </div>
//       )}
//     </li>
//   );
// };

// export default Card;
