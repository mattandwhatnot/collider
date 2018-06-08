import { h } from 'preact';
//import style from './style';
import TableResult from '../tableResult/TableResult';

const DataWorkerWrap = ({ wip }) => {
  console.log('worker says: ' + wip);
  
  let result = [];
  if(!wip) {
    null;
  }else{
    result = wip.split(/\s*,\s*/);
  }
  
  return(
    <TableResult converted={result} />
  );
}

export default DataWorkerWrap;