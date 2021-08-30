import React from "react";
import { Line, Circle, Image } from 'react-konva';
/* import '../spaceship.css' */
import ship from '../img/spaceship.png';
import useImage from 'use-image';
/* import './App.css'; */

const ShipImage = () => {
    const [image] = useImage(ship);
    return <Image image={image} />;
};

let modifier = 5;
window.addEventListener('keydown', (event) => {
    const { style } = Circle;
    switch (event.key) {
        case 'ArrowUp' : style.top = `$parseInt(style.top) - modifier}px`; break;
        case 'ArrowDown' : style.top = `$parseInt(style.top) + modifier}px`; break;
        case 'ArrowLeft' : style.left = `$parseInt(style.left) - modifier}px`; break;
        case 'ArrowRight' : style.left = `$parseInt(style.left) + modifier}px`; break;
    }
})
class Spaceship extends React.Component {
    constructor (props) {
        super(props);
        this.ref = React.createRef();
    };
    render () {
        return (
            <>
                <ShipImage />
            </>
        )
    }
}



export default Spaceship;