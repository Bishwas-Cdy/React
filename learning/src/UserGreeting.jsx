// const UserGreeting = ({ isLoggedIn, username }) => (
//     isLoggedIn ? <h2>Welcome {username}</h2> : <h2>Please log in</h2>
// );
//
// export default UserGreeting;


// const UserGreeting = (props) =>{
//     if (props.isLoggedIn){
//         return(
//             <h2>Welcome {props.username}</h2>
//         )
//     }
//     else
//         return(<h2>Please Login to Continue.</h2>)
// }
// export default UserGreeting;


const UserGreeting = ({isLoggedIn, username="Guest"}) => {
    const welcomeMessage = <h2> Welcome Back {username}.</h2>
    const pleaseLogin = <h2>Please Login to Continue.</h2>

    return isLoggedIn ? welcomeMessage : pleaseLogin ;

}

export default UserGreeting;