export default function Square({ number }) {

    return (
        <div className="square">
            {number}
        </div>
    );
}

// export default function Square(props) {

//     return (
//         <div className="square" style={{
//             backgroundColor: props.niceColor + '70',
//             borderColor: props.niceColor
//         }}></div>
//     );
// }