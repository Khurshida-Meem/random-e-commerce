import { useEffect, useState } from "react";

const useData = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(service => setData(service))
    }, [url]);

    return data;
}

export default useData;