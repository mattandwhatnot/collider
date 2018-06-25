import { h, Component } from 'preact';
import linkState from 'linkstate';
import TextPaste from '../textPaste/TextPaste';
//import TextImport from '../textImport/TextImport';
import DataWorkerWrap from '../dataWorker/DataWorkerWrap';

export default class DataState extends Component {
  state = {
    dtOneRaw: false,
    dtTwoRaw: false,
    dtOneTabled: false,
    dtTwoTabled: false
  }

  render() {
    
    return(
      <div class='split'>
        <div class='splitOne'>
          <TextPaste
            name='csv 1'
            onInput={linkState(this, 'dtOneRaw')} />
          <TextPaste
            name='csv 2'
            onInput={linkState(this, 'dtTwoRaw')} />
        </div>
        <div class='splitTwo'>
          <DataWorkerWrap
            name='table 1'
            wip={this.state.dtOneRaw}
            onConvert={linkState(this, 'dtOneTabled')}/>
          <br />
          <hr />
          <br />
          <DataWorkerWrap
            name='table 2'
            wip={this.state.dtTwoRaw}
            onConvert={linkState(this, 'dtTwoTabled')}/>
        </div>
      </div>
    );
  }
}