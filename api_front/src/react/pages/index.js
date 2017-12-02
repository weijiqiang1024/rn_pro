/**
 * Created by zll on 2017/10/12.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Layout, message, Select } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../public/images/theme_logo.svg';
import * as act from '../../redux/actions/login';
import { MainMenu } from '../../utils/menu';
import { SideRoute, ContentRoute } from '../routes'
import styles from './index'
const { Header, Sider, Content, Footer } = Layout;

message.config({
    top: 50,
    duration: 1,
});
export class mainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            id: ''
        };
        this.logOut = this.logOut.bind(this);
    }

    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.msgTip !== this.props.msgTip) {
            if (nextProps.msgTip.type === 0)
                message.success(nextProps.msgTip.msg);
            else if (nextProps.msgTip.type === 1) {
                if (nextProps.msgTip.msg == "Request failed with status code 401") {
                    localStorage.removeItem('access_token');
                    localStorage.removeItem('username');
                    this.props.history.push('/login');
                    message.error('登陆信息已过期，请重新登陆');
                } else {
                    message.error(nextProps.msgTip.msg);
                }
            }

        }
    }
    componentWillUpdate() {

    }

    componentDidMount() {

    }

    loginOpt = (e) =>{
        
    }

    render() {

        if (this.props.userInfo) {
            this.state.userName = this.props.userInfo.username;
        }

        return (
            <div style={{ minWidth: 800, overflowX: 'auto' }}>
                <Layout>
                    <div style={{ display: 'block' }}>
                        <Header style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', height: '56px', padding: 0, backgroundColor: '#fff', borderColor: '#f0f0f0', }}>
                            <a style={{
                                width: 100,
                                fontSize: 25, fontWeight: '600', marginTop: '-4px', padding: '0px 25px 0px 20px', letterSpacing: 2, color: '#ea6f5a', height: 56,
                            }}>雕虫</a>
                            <div className={styles.navbarNav} style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row', marginLeft: 0 }}>
                                <div style={{ float:'left', left: '246px', flexGrow: 1 }}>
                                    <ul className="nav_ul" style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', fontSize: 20 }}>
                                        <li>首页</li>
                                        <li>下载APP</li>
                                        <li><Select size='large' mode="multiple" style={{ width: 130 }}></Select></li>
                                    </ul>
                                </div>
                                <div style={{ flexGrow: 2 }}></div>
                            </div>
                            <div className="header_button" style={{ width: 332, padding: '0 10px' }}>
                                <a style={{ color: 'gray', padding: '0 15px', fontSize: 15, }}>Aa</a>
                                <Link to="/login" style={{ color: 'gray', padding: '0 15px', fontSize: 15, }} onClick={this.loginOpt}>登录</Link>
                                <Button type="danger" ghost className="register"><Link to="/login"/>
                                <span>注册</span></Button>
                                <Button type="danger" className="acticle">写文章</Button>
                            </div>
                        </Header>
                    </div>
                    <Content style={{ height: 800 }}>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
            // <Layout style={{ width: '100%', height: '100%' }} >
            //     <Header style={{ height: '80px', backgroundColor: '#4a8de6', display: 'flex', justifyContent: 'space-between', padding: 0 }}>
            //         <div style={{ display: 'flex', alignItems: 'center', float: 'left' }}>
            //             <img style={{ margin: '10px 10px 0 10px' }} src={logo} />
            //             <span style={{ whiteSpace: 'nowrap', height: '60px', color: '#FFF', fontSize: '26px', fontWeight: 'bold', marginRight: '30px' }}
            //             > 灵 感 创 意 无 限 平 台</span>

            //             <span style={{ whiteSpace: 'nowrap', height: '60px', color: 'white', fontSize: '10px' }}>
            //                 {'欢迎您：' + this.state.userName}</span>
            //         </div>
            //         <div style={{ display: 'flex', alignItems: 'center', flexDirection: "row", float: 'right' }}>
            //             <MainMenu />
            //             <div style={{ display: 'inline-block', width: '80px' }}>
            //                 <Button type="danger" shape="circle" icon="logout" onClick={this.logOut} />
            //             </div>
            //         </div>
            //     </Header>
            //     <Layout>
            //         {
            //             this.props.location.pathname !== '/main/monitor' ?
            //                 <Sider
            //                     collapsible
            //                     collapsed={this.state.collapsed}
            //                     onCollapse={this.onCollapse}
            //                 ><SideRoute /> </Sider>
            //                 : null
            //         }
            //         <Content><ContentRoute/></Content>

            //     </Layout>
            // </Layout>
        );
    }

    logOut() {
        this.props.history.push('/login');
    }
}


function mapStateToProps(state) {
    return {
        userInfo: state.Login.userInfo,
        msgTip: state.MsgTip,
    }
}

function mapDispatchToProps(dispatch) {

    return {
        submitClick: (param) => {
            dispatch(act.loginSubmit(param))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(mainPage);

