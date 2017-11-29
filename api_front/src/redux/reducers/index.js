/**
 * Created by zll on 2017/10/11.
 */
import { combineReducers } from 'redux'
import MsgTip from './msgTip' //页面提示语
import Login from './login' //登录页面
 
 
 
 
 
import MonitorSite from './sysManage/moniterSite'; //平台配置
import Share from './share'; //共用数据
import SysUser from './sysManage/sysUser'; //用户管理
 

export default combineReducers({
    MsgTip,
    Login, 
    Share,
    MonitorSite,
    SysUser,
    
})