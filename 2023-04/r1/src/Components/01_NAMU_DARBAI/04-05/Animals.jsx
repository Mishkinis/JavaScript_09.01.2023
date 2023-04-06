export default function Animals({ col }) {
    const color = col === "1" ? "blue" : col === "2" ? "red" : "transparent";
    return <h1 style={{ color }}>Zebrai ir bebrai</h1>
}