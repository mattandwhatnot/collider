import { h } from 'preact';
//import style from './style';

const TextPaste = ({ name, onInput }) => (
  <div>
    <p>{name}</p>
    <textarea
      rows='15'
      cols='70'
      onInput={onInput}></textarea>
  </div>
);

export default TextPaste;
