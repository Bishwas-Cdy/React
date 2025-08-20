import React from 'react'
import {useParams} from "react-router-dom";

const Job = () => {
    let params = useParams();
    console.log(params);
    console.log(params.id);
    return (
    <div>Job</div>
  )
}

export default Job