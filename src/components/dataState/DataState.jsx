import { h, Component } from 'preact';
import linkState from 'linkstate';
import TextPaste from '../textPaste/TextPaste';
import TextImport from '../textImport/TextImport';
import DataWorkerWrap from '../dataWorker/DataWorkerWrap';

export default class DataState extends Component {

  render({ }, { dtOneRaw, dtOneTabled }) {
    
    return(
      <div class='split'>
        <div class='splitOne'>
          <TextPaste
            onInput={linkState(this, 'dtOneRaw')} />
          <TextImport 
            onInput={linkState(this, 'dtTwoRaw')} />
        </div>
        <div class='splitTwo'>
          <DataWorkerWrap
             wip={dtOneRaw}
            onConvert={linkState(this, 'dtOneTabled')}/>
        </div>
      </div>
    );
  }
}