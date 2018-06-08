import { h, Component } from 'preact';
import linkState from 'linkstate';
import TextImport from '../textImport/TextImport';
import DataWorkerWrap from '../dataWorker/DataWorkerWrap';

export default class DataState extends Component {
  /*
  state = {
      dataOne: false
    }
*/

  render({ }, { dataOne }) {
    
    return(
      <div class='split'>
        <div class='splitOne'>
          <TextImport onInput={linkState(this, 'dataOne')} />
        </div>
        <div class='splitTwo'>
          <DataWorkerWrap wip={dataOne} />
        </div>
      </div>
    );
  }
}