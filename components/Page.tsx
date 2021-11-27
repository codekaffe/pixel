import React, { MouseEvent } from 'react';
import { CirclePicker, GithubPicker } from 'react-color';
import Canvas from './Editor/Canvas';
import SubmitButton from './Editor/SubmitButton';

export interface PageProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

const colorPalette = [
  '#be4a2f',
  '#d77643',
  '#ead4aa',
  '#e4a672',
  '#b86f50',
  '#733e39',
  '#3e2731',
  '#a22633',
  '#e43b44',
  '#f77622',
  '#feae34',
  '#fee761',
  '#63c74d',
  '#3e8948',
  '#265c42',
  '#193c3e',
  '#124e89',
  '#0099db',
  '#2ce8f5',
  '#c0cbdc',
  '#8b9bb4',
  '#5a6988',
  '#3a4466',
  '#262b44',
  '#181425',
  '#ffffff',
  '#ff0044',
  '#68386c',
  '#b55088',
  '#f6757a',
  '#e8b796',
  '#c28569',
  // eraser
  'transparent'
];

export const Page: React.FC<PageProps> = () => {
  const [selectedColor, setSelectedColor] = React.useState('#0099db');
  const [pixels, setPixels] = React.useState(new Array(16 * 16).fill('transparent'));

  const handleMouseEvent = (e: MouseEvent<HTMLDivElement>, pixelIndex: number) => {
    if (e.type === 'mouseover' && e.buttons < 1) return;
    console.log('e: ', e);
    console.log('selectedColor: ', selectedColor);
    setPixels((state) => {
      const newState = [...state];
      newState[pixelIndex] = e.buttons === 2 ? 'transparent' : selectedColor;
      return newState;
    });
  };

  return (
    <>
      <style jsx>{`
        section {
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
          flex-flow: column wrap;
        }
        h1 {
          font-family: 'Patrick Hand', impact, cursive;
          font-size: 3rem;
          color: #ffffff;
          margin: 0;
        }
      `}</style>
      <section>
        <h1>Draw Some Pixel Art</h1>
        <GithubPicker
          color={selectedColor}
          colors={colorPalette}
          onChange={(color) => setSelectedColor(color.hex)}
          triangle='hide'
          width={'512px'}
        />
        <Canvas pixels={pixels} selectedColor={selectedColor} handleMouseEvent={handleMouseEvent} />
        <SubmitButton submit={() => console.log('SUBMIT!', pixels)} />
      </section>
    </>
  );
};

{
  /* <article>
<Editor onNewColor={setSelectedColor} />
<h1
  style={{ color: pixelColor }}
  onMouseOver={pixelClicked}
  onClick={pixelClicked}
  onMouseDown={pixelClicked}
>
  Pixel
</h1>
</article>
<style jsx>{`
article {
  margin-top: 1rem;
}
h1 {
  display: inline-block;
  border: 1px solid ${pixelColor};
  border-radius: 0.25rem;
  padding: 0.25rem;
  user-select: none;
  cursor: normal;
}
`}</style> */
}
