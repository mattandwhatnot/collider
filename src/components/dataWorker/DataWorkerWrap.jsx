import { h } from 'preact';
//import style from './style';
import TableResult from '../tableResult/TableResult';

const DataWorkerWrap = ({ wip }) => {
  
  let tabled = [];
  if(!wip) {
    null;
  }else{
    let assembled = [];
    const splitRows = wip.split(/\s*\n\s*/);
    for(let r of splitRows) {
      let cut = r.split(/\s+|\s*,\s*|\s*;\s*|\s*!+\s*/);
      assembled.push( cut );
    }
    tabled = assembled;
  }
  
  const colsNum = Math.max( ...Array.from(tabled, x => x.length ) );
  for(let r of tabled) {
    let evenUp = colsNum - r.length;
    for(let i = 0; i < evenUp; i++) {
      r.push("");
    }
  }
  
  return(
    <TableResult converted={tabled} colsNum={colsNum} />
  );
}

export default DataWorkerWrap;