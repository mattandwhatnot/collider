import { h } from 'preact';
//import style from './style';
//import protoWorker from '../../api/protoWorker';

const TextImport = ({ onInput }) => {
  
  function handleFile(e) {
    const file = e.target.files[0];
    console.log(file);
    const name = file.name;
    /* In a Worker
    const reader = new FileReader;
    reader.readAsText(file);
    const rs = reader.readyState;
    const text = reader.result;
    */
    let w;
    if(typeof(Worker) !== "undefined") {
      if(typeof(w) == "undefined") {
        w = new Worker('../../api/protoWorker.js');
      }
      w.postMessage(100);
      w.onmessage = function(event) {
        console.log(event.data);
      };
    }else{
      console.log('No Web Worker support');
    }
    console.log(name);
  }
  
  return(
    <div>
      <input
        id='textfileInput'
        type='file'
        onChange={(e)=>handleFile(e)} />
    </div>
  );
};

export default TextImport;
