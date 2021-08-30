import React from "react";
import { Circle, Image } from 'react-konva';
import ship from '../img/spaceshipsmall.png';
import useImage from 'use-image';

const ShipImage = () => {
    const [image] = useImage(ship);
    return <Image image={image} x={150} y={300}/>;
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