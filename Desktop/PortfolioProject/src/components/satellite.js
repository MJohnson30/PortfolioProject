import React from "react";
import { Image } from 'react-konva';
import satelite from '../img/satelite.png';
import useImage from 'use-image';


const SateliteImage = () => {
    const [image] = useImage(satelite);
    const ref = React.useRef(null);
    React.useEffect(()=>{
        if (ref) {
            console.log(ref)
            setInterval(()=>{
                ref.current.to({
                    x: Math.random() * 800,
                    y: Math.random() * 800,
                    duration: 10,
                    rotation: Math.random() * 400,   
                })
            },3000)
        }
    },[ref])
    return <Image image={image} ref={ref} x={150} y={400} />;
};



class Satelite extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <>
                <SateliteImage />
            </>
        )
    }
}








export default Satelite;