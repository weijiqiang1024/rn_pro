/**
 * Created by zll on 2017/10/11.
 */
import { fork } from 'redux-saga/effects';

import loginSaga from './login'; //登录页面
import monitorSiteSaga from './sysManage/monitorSite'; //监测点配置
import sysUserSaga from './sysManage/sysUser'; //系统用户   
import shareSaga from './share'; //共用数据
export default function* root() {

	yield [
		fork(loginSaga),
		fork(shareSaga),
		
		fork(monitorSiteSaga),
		fork(sysUserSaga),

	]
}

