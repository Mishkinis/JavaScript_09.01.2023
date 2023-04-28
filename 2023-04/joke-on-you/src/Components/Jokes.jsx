import { useContext } from "react"
import { Context } from "./Context"
import Button from "./Button";

export default function Jokes() {

    const { list } = useContext(Context);

    if (null === list) {
        return <h1>Loading..</h1>
    }

    return (
        <div className="box">
            <Button />
            {
                list.map(q => q.type === 'twopart' ? <div className="sd" key={q.id}>
                    <h3>{q.setup}</h3>
                    <p>{q.delivery}</p></div> : <div className="joke" key={q.id}>
                    <p>{q.joke}</p>
                </div>)
            }
        </div>
    )
}