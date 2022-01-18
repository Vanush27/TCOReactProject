import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Loader from "../../components/Reusable/Spinner";
import SingleCard from "../../pages/SingleTask/SingleCard";


const SingleTaskComponent = () => {
    const [data, setData] = useState(null);
    const {task_id} = useParams();

    const getTaskFromDB = (taskId) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const tasks = JSON.parse(localStorage.getItem('data'));
                const candidate = tasks.find(task => task.id === taskId);

                resolve(candidate);
            }, 1000);
        })

    }
    useEffect(() => {
        getTaskFromDB(task_id)
            .then(task => {
                setData(task);
            });
    }, []);

    if (!data) return <Loader/>;

    return (
        <SingleCard
            data={data}/>
    )
}

export default SingleTaskComponent;