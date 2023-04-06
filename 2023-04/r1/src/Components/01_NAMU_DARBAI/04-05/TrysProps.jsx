export default function ThreeProps({ text, text2, spalva }) {
    return <div>
        <h1 style={{ color: spalva }}>{text}</h1>
        <h2 style={{ color: spalva }}>{text2}</h2>
    </div>
}