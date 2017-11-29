/**
 * Created by zll on 2017/10/9.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Layout} from 'antd';
import '../react/pages/index.css'

export class MainMenu extends React.Component {
    componentDidMount() {

    }
    render() {
        return (<div className="MENU">
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['monitor']}
                style={{ height: '81px', width: '100%', backgroundColor: '#4a8de6', display: 'flex', alignItems: 'center' }
                }
                className="menu-self-wei"
            >
                <Menu.Item key="monitor">
                    <Link to="/main/monitor"><Icon type="video-camera" style={{ fontSize: '16px', color: '#ffffff' }} />
                        <span style={{ fontSize: '14px', color: '#ffffff' }}> 实时监测 </span></Link>
                </Menu.Item>
                <Menu.Item key="q&s" >
                    <Link to="/main/qs"><Icon type="database" style={{ fontSize: '16px', color: '#ffffff' }} />
                        <span style={{ fontSize: '14px', color: '#ffffff' }}> 查询统计 </span></Link>
                </Menu.Item>
                <Menu.Item key="analysis" >
                    <Link to="/main/analysis"><Icon type="bank" style={{ fontSize: '16px', color: '#ffffff' }} />
                        <span style={{ fontSize: '14px', color: '#ffffff' }}>数据分析</span></Link>
                </Menu.Item>
                <Menu.Item key="report" >
                    <Link to="/main/report"><Icon type="setting" style={{ fontSize: '16px', color: '#ffffff' }} />
                        <span style={{ fontSize: '14px', color: '#ffffff' }}> 报告管理</span></Link>
                </Menu.Item>
                <Menu.Item key="device" >
                    <Link to="/main/device"><Icon type="setting" style={{ fontSize: '16px', color: '#ffffff' }} />
                        <span style={{ fontSize: '14px', color: '#ffffff' }}> 设备管理</span></Link>
                </Menu.Item>
                <Menu.Item key="system" >
                    <Link to="/main/system"><Icon type="setting" style={{ fontSize: '16px', color: '#ffffff' }} />
                        <span style={{ fontSize: '14px', color: '#ffffff' }}> 系统管理</span></Link>
                </Menu.Item>
            </Menu>
        </div>
        )
    }
}

export class qsMenu extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%' }}
            >
                <Menu.Item key="1"><Link to="/main/qs/singleQ"><Icon type="setting" style={{ fontSize: '16px' }} />
                    <span style={{ fontSize: '14px', color: '#e9e9e9' }}>单点查询</span></Link></Menu.Item>
                <Menu.Item key="2"><Link to="/main/qs/sContrast"><Icon type="setting" style={{ fontSize: '16px' }} />
                    <span style={{ fontSize: '14px', color: '#e9e9e9' }}>单点对比</span></Link></Menu.Item>
                <Menu.Item key="3"><Link to="/main/qs/mContrast"><Icon type="setting" style={{ fontSize: '16px' }} />
                    <span style={{ fontSize: '14px', color: '#e9e9e9' }}>多点对比</span></Link></Menu.Item>
                <Menu.Item key="4"><Link to="/main/qs/ymContrast"><Icon type="setting" style={{ fontSize: '16px' }} />
                    <span style={{ fontSize: '14px', color: '#e9e9e9' }}> 同比环比</span></Link></Menu.Item>
                <Menu.Item key="5"><Link to="/main/qs/statistics"><Icon type="setting" style={{ fontSize: '16px' }} />
                    <span style={{ fontSize: '14px', color: '#e9e9e9' }}> 报表统计</span></Link></Menu.Item>

            </Menu>
        )

    };
}


export class analysisMenu extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <Menu
                theme="dark"
                mode="inline"
                style={{ height: '100%' }}
                defaultSelectedKeys={['1']}
            >
                <Menu.Item key="1"><Link to="/main/analysis/correlation"><Icon type="setting" style={{ fontSize: '16px' }} />
                    <span style={{ fontSize: '14px', color: '#e9e9e9' }}> 因子相关性</span></Link></Menu.Item>
                <Menu.Item key="2"><Link to="/main/analysis/sequence"><Icon type="setting" style={{ fontSize: '16px' }} />
                    <span style={{ fontSize: '14px', color: '#e9e9e9' }}> 时序分布</span></Link></Menu.Item>
                <Menu.Item key="3"><Link to="/main/analysis/diffusion"><Icon type="setting" style={{ fontSize: '16px' }} />
                    <span style={{ fontSize: '14px', color: '#e9e9e9' }}> 扩散分析</span></Link></Menu.Item>
                <Menu.Item key="4"><Link to="/main/analysis/radar"><Icon type="setting" style={{ fontSize: '16px' }} />
                    <span style={{ fontSize: '14px', color: '#e9e9e9' }}> 雷达分析</span></Link></Menu.Item>

            </Menu>
        )

    };
}


export class reportMenu extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <Menu
                theme="dark"
                mode="inline"
                style={{ height: '100%' }}
                defaultSelectedKeys={['1']}
            >
                <Menu.Item key="1"><Link to="/main/report/edit"><Icon type="setting" style={{ fontSize: '16px' }} />
                    <span style={{ fontSize: '14px', color: '#e9e9e9' }}> 报告编辑</span></Link></Menu.Item>
                <Menu.Item key="2"><Link to="/main/report/publish"><Icon type="setting" style={{ fontSize: '16px' }} />
                    <span style={{ fontSize: '14px', color: '#e9e9e9' }}> 报告发布</span></Link></Menu.Item>

            </Menu>
        )

    };
}


export class deviceMenu extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <Menu
                theme="dark"
                mode="inline"
                style={{ height: '100%' }}
                defaultSelectedKeys={['1']}
            >
                <Menu.Item key="1"><Link to="/main/device/setting"><Icon type="setting" style={{ fontSize: '16px' }} />
                    <span style={{ fontSize: '14px', color: '#e9e9e9' }}> 设备配置</span></Link></Menu.Item>
                <Menu.Item key="2"><Link to="/main/device/history"><Icon type="setting" style={{ fontSize: '16px' }} />
                    <span style={{ fontSize: '14px', color: '#e9e9e9' }}> 历史状态</span></Link></Menu.Item>
                <Menu.Item key="3"><Link to="/main/device/control"><Icon type="setting" style={{ fontSize: '16px' }} />
                    <span style={{ fontSize: '14px', color: '#e9e9e9' }}>设备质控</span></Link></Menu.Item>
                <Menu.Item key="4"><Link to="/main/device/alarm"><Icon type="setting" style={{ fontSize: '16px' }} />
                    <span style={{ fontSize: '14px', color: '#e9e9e9' }}> 设备报警</span></Link></Menu.Item>
            </Menu>
        )

    };
}

export class systemMenu extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <Menu
                theme="dark"
                mode="inline"
                style={{ height: '100%' }}
                defaultSelectedKeys={['1']}
            >
                <Menu.Item key="1"><Link to="/main/system/platform"><Icon type="setting" style={{ fontSize: '16px' }} />
                    <span style={{ fontSize: '14px', color: '#e9e9e9' }}> 平台信息配置</span></Link></Menu.Item>
                <Menu.Item key="2"><Link to="/main/system/point"><Icon type="setting" style={{ fontSize: '16px' }} />
                    <span style={{ fontSize: '14px', color: '#e9e9e9' }}> 监测点配置</span></Link></Menu.Item>
                <Menu.Item key="3"><Link to="/main/system/alarm"><Icon type="setting" style={{ fontSize: '16px' }} />
                    <span style={{ fontSize: '14px', color: '#e9e9e9' }}> 报警配置</span></Link></Menu.Item>
                <Menu.Item key="4"><Link to="/main/system/dictionary"><Icon type="setting" style={{ fontSize: '16px' }} />
                    <span style={{ fontSize: '14px', color: '#e9e9e9' }}> 系统字典</span></Link></Menu.Item>
                <Menu.Item key="5"><Link to="/main/system/user"><Icon type="setting" style={{ fontSize: '16px' }} />
                    <span style={{ fontSize: '14px', color: '#e9e9e9' }}>用户管理</span></Link></Menu.Item>
                <Menu.Item key="6"><Link to="/main/system/auth"><Icon type="setting" style={{ fontSize: '16px' }} />
                    <span style={{ fontSize: '14px', color: '#e9e9e9' }}> 权限管理</span></Link></Menu.Item>
                <Menu.Item key="7"><Link to="/main/system/log"><Icon type="setting" style={{ fontSize: '16px' }} />
                    <span style={{ fontSize: '14px', color: '#e9e9e9' }}> 日志管理</span></Link></Menu.Item>

            </Menu>
        )

    };
}