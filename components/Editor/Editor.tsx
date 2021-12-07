import React from 'react';
import { GithubPicker } from 'react-color';

import Canvas from './Canvas';
import SubmitButton from './SubmitButton';
import colorPalette from './color-palette';
import Header from '../Header/Header';

interface EditorProps {
  onSubmit?: (pixels: string[]) => void | Promise<void>;
  onChange?: (pixels: string[]) => void;
}

export const Editor: React.FC<EditorProps> = ({ onSubmit, onChange }) => {
  const [selectedColor, setSelectedColor] = React.useState('#0099db');
  const [pixels, setPixels] = React.useState(new Array(16 * 16).fill('transparent'));

  const submit = onSubmit || (() => console.log('SUBMIT!', pixels));

  const handleMouseEvent = (e: React.MouseEvent<HTMLDivElement>, pixelIndex: number) => {
    // only process left clicks
    if (e.type === 'mouseover' && e.buttons < 1) return;

    setPixels((state) => {
      const newState = [...state];
      // set the pixel to the selected color or transparent if using right click
      newState[pixelIndex] = e.buttons === 2 ? 'transparent' : selectedColor;
      return newState;
    });
    if (onChange) onChange(pixels);
  };

  return (
    <>
      <Header>Draw Some Pixel Art</Header>
      <GithubPicker
        color={selectedColor}
        colors={colorPalette}
        onChange={(color) => setSelectedColor(color.hex)}
        triangle='hide'
        width={'512px'}
      />
      <Canvas pixels={pixels} selectedColor={selectedColor} handleMouseEvent={handleMouseEvent} />
      <SubmitButton submit={submit} />
    </>
  );
};
