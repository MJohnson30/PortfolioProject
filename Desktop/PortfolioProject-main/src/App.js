
import { Stage, Layer, Image } from 'react-konva';
import './App.css';
import Spaceship from './components/ship';
import Space from './components/background';
import Planet from './components/planets';

export const App = () => {
  return (
    <div className = "container" > 
      <Stage className="canvas" width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Spaceship className="spaceship"/>
          <Space />
          {<Planet />}
        </Layer>
      </Stage>
    </div>
  );
}
export default App;