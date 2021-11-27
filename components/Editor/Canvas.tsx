import React from 'react';
import Pixel from './Pixel';

const Canvas: React.FC<{
  pixels: string[];
  selectedColor: string;
  handleMouseEvent: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    pixelPosition: number,
  ) => void;
}> = ({ pixels, selectedColor, handleMouseEvent }) => {
  return (
    <>
      <style jsx>{`
        .editor {
          margin: auto;
          margin-top: 10px;
          width: 512px;
          height: 512px;
          display: flex;
          flex-flow: row wrap;
          border-radius: 0.25rem;
          overflow: hidden;
          box-shadow: 3px 8px 0.5rem 5px rgb(0 0 0 / 29%);
          background-color: #fafafadd;
          background-image: linear-gradient(45deg, #a1a1a1 25%, transparent 25%),
            linear-gradient(-45deg, #a1a1a1 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #a1a1a1 75%),
            linear-gradient(-45deg, transparent 75%, #a1a1a1 75%);
          background-size: calc(512px / 16) calc(512px / 16);
          background-position: 0 0, 0 calc(512px / 32), calc(512px / 32) calc(512px / 32 * -1),
            calc(512px / 32 * -1) 0px;
        }
      `}</style>
      <div
        className='editor'
        onContextMenu={(e) => {
          e.preventDefault();
          return false;
        }}
      >
        {pixels.map((pixelColor, i) => {
          return (
            <Pixel
              key={('pixel-' + i).padStart(3, '0')}
              pixelPosition={i}
              handleMouseEvent={handleMouseEvent}
              color={pixelColor}
              selectedColor={selectedColor}
            />
          );
        })}
      </div>
    </>
  );
};

export default Canvas;
