import { useState } from 'react';
import TopBar from './ScreenEditor/TopBar';
import CanvasArea from './ScreenEditor/Canvas';

const ScreenEditor = () => {
  const [canvasText, setCanvasText] = useState('');

  return (
    <div>
      <TopBar setCanvasText={setCanvasText} />
      <CanvasArea canvasText={canvasText} />
    </div>
  );
};

export default ScreenEditor;