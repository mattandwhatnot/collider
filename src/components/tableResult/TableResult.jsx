import { h } from 'preact';
//import style from './style';

const TableResult = ({ converted }) => {
  console.log(converted);
  if(Array.isArray(converted) === true) {
    return(
      <div>
        <table>
          <thead>
            <th>col1</th>
            <th>col2</th>
          </thead>
          <tbody>
            {converted.map( (dt, index)=>{
              return(
                <tr key='index'>
                  <td>{dt}</td>
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