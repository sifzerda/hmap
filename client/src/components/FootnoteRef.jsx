// FootnoteRef.jsx
import { useState, useRef } from 'react';
import useFootnoteStore from '../utils/footnoteStore.js';

function FootnoteRef({ text }) {
const getNextFootnoteNumber = useFootnoteStore(state => state.getNextFootnoteNumber); 
  const indexRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Assign index only once
  if (indexRef.current === null) {
    indexRef.current = getNextFootnoteNumber();
  }

  return (
    <span
      className="footnote-ref"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <sup className="footnote-marker">{indexRef.current}</sup>
      {hovered && (
        <span className="footnote-tooltip">
          {text}
        </span>
      )}
    </span>
  );
}

export default FootnoteRef;
