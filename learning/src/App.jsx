// import ReUseAble from "./ReUseAble.jsx";
// import Card from "./Card.jsx";
//
// const App = () => {
//     const fruits = [
//         { id: 1, name: "Apple", calories: 75 },
//         { id: 2, name: "Mango", calories: 57 },
//         { id: 3, name: "Banana", calories: 98 },
//         { id: 3, name: "Orange", calories: 63 },
//         { id: 3, name: "Grapes", calories: 79 },
//     ];
//
//     const vegetable = [
//         { id: 1, name: "Apple", calories: 75 },
//         { id: 2, name: "Mango", calories: 57 },
//         { id: 3, name: "Banana", calories: 98 },
//         { id: 3, name: "Orange", calories: 63 },
//         { id: 3, name: "Grapes", calories: 79 },
//     ];
//
//     return(
//     <>
//         {fruits.length > 0? <ReUseAble items={fruits} category="Fruits"></ReUseAble> : null}
//         {vegetable.length > 0 && <ReUseAble items={vegetable} category="Vegetables"></ReUseAble>}
//         <Card></Card>
//     </>
//
//   )
// };
//
// export default App

// import LearnUseState1 from "./learnUseState/LearnUseState1.jsx";
//
import MyRoutes from "./component/MyRoutes.jsx";

const App = () => {
  return (
    <>
      <MyRoutes></MyRoutes>
    </>
  );
};
export default App;
