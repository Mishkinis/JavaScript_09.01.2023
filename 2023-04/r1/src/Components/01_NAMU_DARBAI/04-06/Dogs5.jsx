export default function Dogs5({ numbers }) {
    if (numbers > 6) {
        return <div style={{ color: 'green' }}>{numbers}</div>
    } else {
        return <div style={{ color: 'red' }}>{numbers}</div>
    }
}