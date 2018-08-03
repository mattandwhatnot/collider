import { h } from 'preact';
//import style from './style';
function handleStretch(inputData, outputData) {
    let objArray = [];
    if(Array.isArray(inputData) === true) {
      for(let outer of inputData) {
        for(let inner of outer) {
          if(inner !== outer[0] && inner !== '') {
            objArray.push({
              part : outer[0],
              ref : inner
            });
          }else{null}
        }
      }
    }else{null}
    outputData(objArray);
  }

const DataStetch = ({ inputData, outputData }) => {
  
  return(
    <button onClick={(e)=>handleStretch(inputData, outputData)}>stretch</button>  
  );
};

export default DataStetch;