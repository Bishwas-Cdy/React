import PropTypes from 'prop-types'
const Student = ({ name = "Nyra", age = 0, isStudent = true }) => {
    return (
        <div className="student">
            <p>My name is {name}. </p>
            <p>I am {age} years old. </p>
            <p>I am a {isStudent ? "Student" : "Dropped Out"}. </p>
        </div>
    );
}

export default Student;