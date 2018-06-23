import { h } from 'preact';
//import style from './style';

const TextPaste = ({ onInput }) => (
  <div>
    <textarea
      rows='20'
      cols='50'
      onInput={onInput}></textarea>
  </div>
);

export default TextPaste;
