import axios from "axios";
import { useEffect, useState } from "react"

function Task() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/tasks")
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <>
            <h1 className="text-3xl font-bold underline">
                {data && data.map((item, index) => (
                    <div>
                        <div>Task {index}</div>
                        <div>ID: {item._id}</div>
                        <div>Title: {item.title}</div>
                    </div>
                ))}
            </h1>
            <div class="gradient-container">
    <div class="gradient"></div>
  </div>
        </>
    )
}

export default Task;
