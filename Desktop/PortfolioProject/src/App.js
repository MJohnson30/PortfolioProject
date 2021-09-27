
import { Stage, Layer, Text, Image } from 'react-konva';
import './App.css';
import './components/satellite';
import Spaceship from './components/ship';
import Space from './components/background';
import Planet from './components/planets';
import Satelite from './components/satellite';

export const App = () => {
  return (
    <div className = "container" > 
      <Stage className="canvas" width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          
          <Space />
          <Planet />
          <Text x={350} y={700} stroke="yellow" fontSize={40} fill="blue" fontWeight="bold"  text="Welcome to Marcus Johnson Portfolio Page" />
          <Satelite />
          <Spaceship />
        </Layer>
      </Stage>
    </div>
  );
}
export default App;