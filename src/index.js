/**
 * @file 项目入口文件
 */

import tools from '@lib/tools';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

const App = () => {
    tools.log();
    return <React.Fragment>
        Hello World
    </React.Fragment>
};

ReactDOM.render(<App />, document.getElementById('app'));