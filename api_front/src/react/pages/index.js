/* 
 * @Title: $undefined 
 * @Description: Todo 
 * @Author: weijq@cychina.cn (韦继强) 
 * @Date: 2017-12-06 18:57:22 
 * @Last Modified time: 2017-12-06 18:57:22 
 * @Version:V1.0 
 * Copyright: Copyright (c) 2017' 
 */

import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Layout, message, Select } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../public/images/theme_logo.svg';
import * as act from '../../redux/actions/login';
import { MainMenu } from '../../utils/menu';
import { SideRoute, ContentRoute } from '../routes'
import styles from './index.css'
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

    loginOpt = (e) => {

    }

    render() {

        if (this.props.userInfo) {
            this.state.userName = this.props.userInfo.username;
        }

        return (
            <section>
                <header>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', height: '56px !important', padding: 0, border: '1px solid #f0f0f0', backgroundColor: '#fff' }}>
                        <a style={{
                            display: 'flex',
                            alignItems: 'center',
                            width: 100, flexGrow: 1,
                            fontSize: 25, fontWeight: '600', padding: '0px 25px 0px 20px', letterSpacing: 2, color: '#ea6f5a', height: 56,
                        }}>雕虫</a>
                        <div className={styles.navbarNav} style={{ display: 'flex', flexGrow: 3, justifyContent: 'flex-start', flexDirection: 'row', marginLeft: 0 }}>
                            <ul className="nav_ul" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', fontSize: 17, color: '#333' }}>
                                <li><i className="fa fa-compass"></i> 首页</li>
                                <li><i className="fa fa-mobile" aria-hidden="true"></i> 下载APP</li>
                                <li><div className={styles.searchBox} >
                                    <div style={{ display: 'flex' }}>
                                        <input type="text" placeholder="你想要的..."/>
                                        <a href="" className={styles.searchGlass}><i className="fa fa-search" aria-hidden="true"></i></a>
                                    </div>
                                </div></li>
                            </ul>
                        </div>
                        <div className="header_button" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flexGrow: 1, width: 332, padding: '0 10px' }}>
                            <a style={{ color: 'gray', padding: '0 15px', fontSize: 15, }}>Aa</a>
                            <Link to={{ pathname: '/login', state: { opt: 'login' } }} style={{ color: 'gray', padding: '0 15px', fontSize: 15, }} onClick={this.loginOpt}>登录</Link>
                            <Button type="danger" ghost className="register"><Link to={{ pathname: '/login', state: { opt: 'register' } }}>
                                <span>注册</span></Link></Button>
                            <Button type="danger" className="acticle"><i className="fa fa-pencil"></i> 写文章</Button>
                        </div>
                    </div>
                </header>
                <article>
                    <div className={styles.content}>
                        <div className={styles.leftGrow}></div>
                        <div id="content" className={styles.midContent}>
                            <h1>上方固定，下方自适应</h1>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                            <p>上方固定，下方自适应</p>
                        </div>
                        <div className={styles.rightGrow}></div>
                    </div>
                </article>
                <footer className={styles.mainFooter}>
                    <div className={styles.footer}>
                        <div className={styles.infoRow1}>
                            <a href="">关于雕虫</a>
                            <em>·</em>
                            <a href="">联系我们</a>
                            <em>·</em>
                            <a href="">加入我们</a>
                            <em>·</em>
                            <a href="">雕虫出版</a>
                            <em>·</em>
                            <a href="">品牌与徽标</a>
                            <em>·</em>
                            <a href="">帮助中心</a>
                            <em>·</em>
                            <a href="">合作伙伴</a>
                        </div>
                        <div className={styles.infoRow2}>
                            <span>©2017-2020 合肥2B青年团队 / 雕虫 / 皖ICP备11018329号-5 / 皖公网安备31010402002252号 </span>
                        </div>
                    </div>
                </footer>
            </section>
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

