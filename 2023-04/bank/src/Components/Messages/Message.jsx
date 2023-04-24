export default function Message({ msg, deleteMsg }) {
    return (
        <div className={`msg ${msg.type}`}>
            <p>{msg.text}</p>
            <button className="sns" onClick={() => deleteMsg(msg.id)}>X</button>
        </div>
    );
}