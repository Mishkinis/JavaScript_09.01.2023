import { useContext } from "react"
import { Context } from "./Context"

export default function Button() {

    const { doReload } = useContext(Context)

    return (
        <div>
            <button className="button" onClick={doReload}>NEW JOKES 10x</button>
        </div>
    )
}