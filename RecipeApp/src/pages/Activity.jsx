import React, { useEffect, useState } from 'react'
import { getAllActivity } from '../../api/getAllActivity';

const Activity = () => {
    const [activity, setActivity]=useState({});
    useEffect(() =>{
        getAllActivity().then((data)=>{
            setActivity(data.data)
        }).catch((err)=>{console.log(err)})
    },[])
  return (
    <div>
<p>{activity?.activity}</p>
<p>{activity?.type}</p>
    </div>
  )
}

export default Activity