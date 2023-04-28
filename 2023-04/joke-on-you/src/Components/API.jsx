import { useEffect, useState } from "react";
import axios from 'axios';

export default function API() {

    const [api, setApi] = useState(null);

    useEffect(() => {
        axios.get('https://v2.jokeapi.dev/joke/Programming?amount=10')
            .then(res => setApi(res.data.jokes))
    }, []);

    return [api]

}