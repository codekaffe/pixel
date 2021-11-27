import React from 'react';

const Pixel: React.FC<{
  color: string;
  handleMouseEvent: (...args: any[]) => any;
  pixelPosition: number;
  selectedColor: string;
}> = ({ color, handleMouseEvent, pixelPosition, selectedColor }) => {
  return (
    <>
      <style jsx>{`
        .pixel {
          width: calc(512px / 16);
          height: calc(512px / 16);
          user-select: none;
          background-color: ${color};
        }
        .pixel:hover {
          ::before {
            content: '';
            width: 100%;
            height: 100%;
            display: block;
            background-color: ${selectedColor};
          }
        }
      `}</style>
      <div
        className='pixel'
        onClick={(e) => handleMouseEvent(e, pixelPosition)}
        onMouseDown={(e) => handleMouseEvent(e, pixelPosition)}
        onMouseOver={(e) => handleMouseEvent(e, pixelPosition)}
      ></div>
    </>
  );
};

export default Pixel;
