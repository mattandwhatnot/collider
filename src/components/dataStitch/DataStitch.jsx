import { h } from 'preact';
//import style from './style';
import TableResult from '../tableResult/TableResult';

const DataStitch = ({ tableOne, tableTwo }) => {
  
  let assembledArray = [];
  if(Array.isArray(tableOne) === true && Array.isArray(tableTwo) === true) {
    for(let row of tableOne) {
      let newRow = row;
      let match = tableTwo.find( x => x.ref === row[0]);
      if(match) {
        newRow.push(match.part);
        assembledArray.push(newRow);
      }else{null}
    }
  }else{null}
  
  const colhelp = assembledArray[0] || [];
  return(
    <TableResult converted={assembledArray} colsNum={colhelp.length || 0} />
    //validate
    //export
  );
};

export default DataStitch;