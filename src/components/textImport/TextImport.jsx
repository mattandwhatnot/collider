import { h } from 'preact';
//import style from './style';

const TextImport = ({ onInput }) => (
  <div>
    <textarea
      rows='20'
      cols='50'
      onInput={onInput}></textarea>
  </div>
);

export default TextImport;
