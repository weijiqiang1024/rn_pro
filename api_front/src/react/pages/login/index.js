/**
 * Created by zll on 2017/10/11.
 */
import React from 'react';
import { connect } from 'react-redux';
import { message } from 'antd';
import * as act from '../../../redux/actions/login'
import * as shareAct from '../../../redux/actions/share'
import styles from './login.css';
import LoginForm from '../../components/loginForm/loginForm';

class Login extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.msgTip !== this.props.msgTip) {
            message.error(nextProps.msgTip);
        }
    }
    render() {
        return (
            <div style={{
                display: 'flex',
                minHeight: '100vh',
                flexDirection: 'column',
                backgroundColor:'rgb(241, 241, 241)'
            }}>
                <div style={{position:'fixed',top:80,left:50,fontFamily:'monospace',fontSize:50,fontWeight:'bold',
                letterSpacing:-16,color:'#ea6f5a'}}>
                    <span>见·著</span>
                </div>
                    <LoginForm {...this.props} />
                 
                <footer style={{ display:'flex',flexDirection:'column',justifyContent:'flex-end',  alignItems:'center', flex: 1 }}>
                    <div style={{color:'#49a9ee'}}>
                        支持谷歌浏览器 版权所有 @2B青年股份有限公司
                    </div>
                </footer>


            </div>
        )
    }
}

// Login.propTypes = {
//     submitClick: React.PropTypes.func.isRequired
// };


function mapStateToProps(state) {
    return {
        loginRet: state.Login.loginRet,
        userInfo: state.Login.userInfo,
        msgTip: state.MsgTip.msg,
        sysDic: state.Share.sysDic,
        siteGroup: state.Share.monitorSiteGroup
    }
}

function mapDispatchToProps(dispatch) {
    return {
        submitClick: (param) => {
            dispatch(act.loginSubmit(param))
        },
        querySysdic: (param) => {
            dispatch(shareAct.querySysdic(param))
        },
        queryArea: (param) => {
            dispatch(shareAct.queryArea(param))
        },
        queryFactor: (param) => {
            dispatch(shareAct.queryFactor(param))
        },
        queryMonitorSite: (param) => {
            dispatch(shareAct.querySysSite(param))
        },
        queryMonitorSiteGroup: (param) => {
            dispatch(shareAct.querySiteGroup(param))
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);