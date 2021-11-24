import React from 'react';
import { CirclePicker } from 'react-color';

export const Editor = ({ onNewColor }: { onNewColor: (color: string) => void }) => {
  return (
    <div>
      <CirclePicker onChange={(color) => onNewColor(color.hex)} />
    </div>
  );
};

export default Editor;
