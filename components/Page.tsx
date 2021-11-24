import React, { MouseEvent } from 'react';
import Editor from './Editor';

export interface PageProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Page: React.FC<PageProps> = () => {
  const [selectedColor, setSelectedColor] = React.useState('#fff');
  const [pixelColor, setPixelColor] = React.useState('#fff');

  const pixelClicked = (event: MouseEvent) => {
    console.log('event: ', event);
    if (event.buttons === 1 && selectedColor !== pixelColor) {
      setPixelColor(selectedColor);
    }
  };

  return (
    <>
      <article>
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
      `}</style>
    </>
  );
};
