import React from 'react';
import useCursor from '../../hooks/useCursor';

export default function Cursor() {
  const { cursorRef, blurRef } = useCursor();

  return (
    <>
      <div id="cursor" ref={cursorRef}></div>
      <div id="cursor-blur" ref={blurRef}></div>
    </>
  );
}
