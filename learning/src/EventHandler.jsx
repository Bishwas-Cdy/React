// const EventHandler = () => {
//     // return (
//     //     <button onClick={() => console.log("The button is Clicked")}>
//     //         Click Me
//     //     </button>
//     // );
//     return (
//         <button
//             onClick={() => {
//                 const name = "Bro";
//                 console.log(`${name} stop clicking me`);
//             }}
//         >
//             Click me
//         </button>
//     );
//
//
//
// };
//
// export default EventHandler;


// const EventHandler = () => {
//
//     let count = 0
//     const handleClick = (name) =>{
//         if (count < 3){
//             count++;
//             console.log(`${name} you clicked me ${count} times`);
//
//         }
//         else{
//             console.log(`${name} stop clicking me`);
//         }
//     }
//
//
//     return (<button onClick={()=>(handleClick("Bishwas"))}>Click Me</button>)
// }
// export default EventHandler;

// import React from 'react'
//
// const EventHandler = () => {
//   const handle = (e) => e.target.textContent = "Don't Click Me"
//     return (
//         <button onClick={(e)=>handle(e)}>No</button>)
// }
//
// export default EventHandler