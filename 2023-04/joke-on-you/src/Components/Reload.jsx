import { useState } from "react";

export default function Reload() {

    const [reload, setReload] = useState(null);
    const doReload = _ => {
        setReload(window.location.reload(false))
    };

    return [reload, doReload];
}