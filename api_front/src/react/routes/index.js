/**
 * Created by zll on 2017/10/9.
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import { Layout } from 'antd';
import {qsMenu,analysisMenu,deviceMenu,reportMenu,systemMenu} from '../../utils/menu';
import Login from '../../react/pages/login';
import mainPage from '../../react/pages';
 
import test from '../../react/pages/testPage'
import monitorSite from '../pages/systemManage/monitorSite'
import sysUser from '../pages/systemManage/sysUser';

import Store from '../../redux';
import  './index.css';
const store =Store();
const {Content } = Layout;
export default class Routes extends Component {
    componentDidMount(){

    }
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter >
                    <div style={{width:'100%',height:'100%'}}>
                        <div className="listen"></div>
                        <Switch>
                            <Route exact strict path="/login" component={Login} />
                            <Route path="/main" component={mainPage} />
                            <Redirect from='*' to='/login' />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
};

export  class SideRoute extends React.Component {

    render() {
        return (
            <ul style={{height:'100%',overflow:'auto'}} className="menu">
                <Route path="/main/qs" component={qsMenu} />
                <Route path="/main/analysis" component={analysisMenu} />
                <Route path="/main/device" component={deviceMenu} />
                <Route path="/main/report" component={reportMenu}/>
                <Route path="/main/system" component={systemMenu}/>
            </ul>
        );
    }
}

export  class ContentRoute extends React.Component {

    render() {
        return (
            <Content style={{ width:'100%',height:'100%',background: '#fff',overflow:'auto'}}>
                <Route path="/main/monitor" component={test} />
                <Route path="/main/qs" component={qsRoute} />
                <Route path="/main/analysis" component={analysisRoute} />
                <Route path="/main/device" component={deviceRoute} />
                <Route path="/main/report" component={reportRoute} />
                <Route path="/main/system" component={systemRoute} />
            </Content>
        );
    }
}

export  class qsRoute extends React.Component {

    render() {
        return (
            <Content className="content">
                <Switch>
                    <Route path="/main/qs/singleQ" component={test}/>
                    <Route path="/main/qs/sContrast" component={test}/>
                    <Route path="/main/qs/mContrast" component={test}/>
                    <Route path="/main/qs/ymContrast" component={test}/>
                    <Route path="/main/qs/statistics" component={test}/>
                    <Route path="/main/qs" component={test}/>
                </Switch>
            </Content>
        );
    }
}

export  class analysisRoute extends React.Component {

    render() {
        return (
            <Content className="content">
                <Switch>
                    <Route path="/main/analysis/correlation" component={test}/>
                    <Route path="/main/analysis/sequence" component={test}/>
                    <Route path="/main/analysis/diffusion" component={test}/>
                    <Route path="/main/analysis/radar" component={test}/>
                    <Route path="/main/analysis" component={test}/>
                </Switch>
            </Content>
        );
    }
}

export  class reportRoute extends React.Component {

    render() {
        return (
            <Content className="content">
                <Switch>
                    <Route path="/main/report/edit" component={test}/>
                    <Route path="/main/report/publish" component={test}/>
                    <Route path="/main/report" component={test}/>
                </Switch>
            </Content>
        );
    }
}

export  class deviceRoute extends React.Component {

    render() {
        return (
            <Content className="content">
                <Switch>
                    <Route path="/main/device/setting" component={test}/>
                    <Route path="/main/device/history" component={test}/>
                    <Route path="/main/device/control" component={test}/>
                    <Route path="/main/device/alarm" component={test}/>
                    <Route path="/main/device" component={test}/>
                </Switch>
            </Content>
        );
    }
}

export  class systemRoute extends React.Component {

    render() {
        return (
            <Content className="content">
                <Switch>
                    <Route path="/main/system/platform" component={test}/>
                    <Route path="/main/system/point" component={test}/>
                    <Route path="/main/system/alarm" component={test}/>
                    <Route path="/main/system/dictionary" component={test}/>
                    <Route path="/main/system/user" component={sysUser}/>
                    <Route path="/main/system/auth" component={test}/>
                    <Route path="/main/system/log" component={test}/>
                    <Route path="/main/system" component={test}/>
                </Switch>
            </Content>
        );
    }
}