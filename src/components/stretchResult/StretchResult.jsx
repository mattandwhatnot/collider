import { h } from 'preact';
//import style from './style';

const StretchResult = ({ data }) => {
  //console.log(data);
  
  if(Array.isArray(data) === true) {
    return(
      <div>
        <table>
          <thead>
            <th>partnum</th>
            <th>ref</th>
          </thead>
          <tbody>
            {data.map( (row, index)=>{
              return(
                <tr key={index}>
                  <td>{row.part}</td>
                  <td>{row.ref}</td>
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

export default StretchResult;