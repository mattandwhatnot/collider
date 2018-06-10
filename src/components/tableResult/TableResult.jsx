import { h } from 'preact';
//import style from './style';

const TableResult = ({ converted, colsNum }) => {
  console.log(converted);
  let hCols = [];
  for(let i = 0; i < colsNum; i++) { hCols.push(i) };
  
  if(Array.isArray(converted) === true) {
    return(
      <div>
        <table>
          <thead>
            {hCols.map( (hd, iDx)=>{
              return <th key={iDx}>col{hd + 1}</th>
            })}
          </thead>
          <tbody>
            {converted.map( (row, index)=>{
              return(
                <tr key={index}>
                  {row.map( (cell, inx)=>{
                    return <td key={inx + 'a'}>{cell}</td>
                  })}
                </tr>
            )})}
          </tbody>
        </table>
      </div>
    );
  }else{
    return(
      <hr />
    );
  }
}

export default TableResult;