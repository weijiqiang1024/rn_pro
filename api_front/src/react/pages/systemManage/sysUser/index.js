/**
 * weijq
 */
import React from 'react';
import { connect } from 'react-redux';
import { message } from 'antd';
import * as sysUserAc from '../../../../redux/actions/sysManage/userManage'
import { pubFunc } from '../../../../utils/pubFnc';
// import styles from './index.css';
import Tables from '../../../components/systemManage/userManage/table';
import SearchForm from '../../../components/systemManage/userManage/searchForm';

class SysUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    ComponentWillRecieveProps(nextProps) {

    }

    render() {

        return (
            <div>
                 <SearchForm  {...this.props} ref="searchForm" /> 
                 <Tables {...this.props} searchForm={this.refs.searchForm}/> 
            </div>
        )
    }
}

function mapStateToProps(state) {
    //站点 类型
     
    return {
        SysUser: state.SysUser,
        area: state.Share.area,
        areaOptions: pubFunc.areaOptions(state.Share.area),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        queryOpt: (param) => {
            dispatch(sysUserAc.querySubmit(param));
        },
        addOpt: (param) => {
            dispatch(sysUserAc.addSubmit(param));
        },
        editOpt: (param) => {
            dispatch(sysUserAc.editSubmit(param));
        },
        deleteOpt: (param) => {
            dispatch(sysUserAc.deleteSubmit(param));
        },
         
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(SysUser);