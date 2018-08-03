import { h, Component } from 'preact';
import linkState from 'linkstate';
import TextPaste from '../textPaste/TextPaste';
//import TextImport from '../textImport/TextImport';
import DataWorkerWrap from '../dataWorker/DataWorkerWrap';
import DataStretch from '../dataStretch/DataStretch';
import StretchResult from '../stretchResult/StretchResult';

import DataStitch from '../dataStitch/DataStitch';

export default class DataState extends Component {
  state = {
    dtOneRaw: false,
    dtTwoRaw: false,
    dtOneTabled: false,
    dtTwoTabled: false,
    dtStretch: false
  }

  storeArrayOne(input) {
    this.setState({ dtOneTabled : input });
  }
  storeArrayTwo(input) {
    this.setState({ dtTwoTabled : input });
  }
  storeStretchArray(input) {
    this.setState({ dtStretch : input });
  }

  render() {
    
    console.log(this.state.dtTwoRaw, this.state.dtTwoTabled, this.state.dtStretch );
    
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
            onConvert={this.storeArrayOne.bind(this)} />
          <br />
          <hr />
          <br />
          <DataWorkerWrap
            name='table 2'
            wip={this.state.dtTwoRaw}
            onConvert={this.storeArrayTwo.bind(this)} />
          <br />
          <hr />
          <DataStretch
            inputData={this.state.dtTwoTabled}
            outputData={this.storeStretchArray.bind(this)} />
          <br />
          <StretchResult data={this.state.dtStretch} />
          <br />
          <DataStitch
            tableOne={this.state.dtOneTabled}
            tableTwo={this.state.dtStretch} />
        </div>
      </div>
    );
  }
}