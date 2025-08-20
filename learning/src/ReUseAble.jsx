// const ReUseAble = (props) => {
//     const category = props.category;
//     const fruits = props.items;
//     const Fruits = fruits.map((value) => {
//         return (
//             <li key={value.id}>
//                 {value.name}: <b>{value.calories}</b>
//             </li>
//         );
//     });
//
//     return (
//         <>
//             <h3>{category}</h3>
//             <ol>{Fruits}</ol>
//         </>
//     );
// };
//
// export default ReUseAble;



const ReUseAble = ({ category = "Category",  items = [],}) => {
    const Fruits = items.map((value) => {
        return (
            <li key={value.id}>
                {value.name}: <b>{value.calories}</b>
            </li>
        );
    });

    return (
        <>
            <h3>{category}</h3>
            <ol>{Fruits}</ol>
        </>
    );
};

export default ReUseAble;
