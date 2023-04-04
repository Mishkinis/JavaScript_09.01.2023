import randColor from "./Functions/randColor";
import rand from "./Functions/rand";


//komponentas
export default function Racoon() {
    const padding = '20px';
    const box = <div className="greenBox"></div>

    //norint deti i kitas eilutes reikia po return viska ideti tarp ()
    return (
        <div className="racoon">
            <h2 className="animal red">
                {box}
                <i>RACOON {2 * 4}</i>
                {box}
            </h2>
            <h2 className="animal">
                {/* pirmas skliaustelis yra JS, antri pasako, kad yra JS objektas */}
                <i style={{ letterSpacing: '30px' }}>RACOON {7 - 2}</i>
            </h2>
            <h2 className="animal">
                <i style={
                    {
                        color: 'coral',
                        backgroundColor: randColor(),
                        padding: rand(0, 1) ? padding : null
                    }
                }>RACOON </i>
            </h2>
            <span> small</span>
        </div >
    );
}
//    <></>    tuscias tagas i html dom nera grazinamas.

// export default Racoon;