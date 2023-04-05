export default function TextoDydis({ H1Textas, H2Textas, spalvele }) {
    return (
        <div>
            <h1>{H1Textas}</h1>
            <h2>{H2Textas}</h2>
            <h1 style={{ color: 'green' }}>{spalvele}</h1>
        </div>
    );
}