import React from 'react';
import { Form, Icon, Input, Button, Row, Col, Select, Modal, Radio, Cascader } from 'antd';

import styles from './searchForm.css';

class EidtData extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            evFlag: false
        };
    }

    componentWillMount() {
        if (this.props.recordObj && this.props.recordObj.editRecord) {
            this.setState({
                editRecord: this.props.recordObj.editRecord,
                evFlag: this.props.recordObj.evFlag
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.recordObj && (nextProps.recordObj.editRecord !== this.state.editRecord
            || nextProps.recordObj.evFlag !== this.state.evFlag)) {
            this.setState({
                editRecord: nextProps.recordObj.editRecord,
                evFlag: nextProps.recordObj.evFlag
            });
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const FormItem = Form.Item;
        const Option = Select.Option;
        const RadioGroup = Radio.Group;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 10 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
            }
        };
        const psLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 12 },
        };

        let initCity = [];
        let cityTemp = Object.assign({}, this.state.editRecord);
        if (cityTemp) {
            if (cityTemp.city)
                initCity.push(cityTemp.city);
            if (cityTemp.area)
                initCity.push(cityTemp.area);
        }
        return (
            <div>
                <Form
                    onSubmit={this.handleAddSbumit}
                    style={{ padding: '10px 10px 0 10px' }}>
                    <Row gutter={12} style={{ width: '100%' }}>
                        <Col span={12}>
                            <FormItem {...formItemLayout} label='姓名:'>
                                {getFieldDecorator('name', {
                                    initialValue: this.state.editRecord ? this.state.editRecord.name : '',
                                    rules: [{
                                        required: true, message: '姓名!',
                                    }],
                                })(
                                    <Input placeholder="必填" size='small' style={{ display: 'inline-block', width: 130 }} disabled={this.state.evFlag} />
                                    )}
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem  {...formItemLayout} label="性别:">
                                {getFieldDecorator('sex', {
                                    initialValue: this.state.editRecord ? this.state.editRecord.sex : '0',
                                    rules: [{
                                        required: true, message: '请输入内容!'
                                    }]
                                })(
                                    <RadioGroup style={{ display: 'inline-block', width: 130 }} disabled={this.state.evFlag}>
                                        <Radio value={'0'}>男</Radio>
                                        <Radio value={'1'}>女</Radio>
                                    </RadioGroup>

                                    )}
                            </FormItem>
                        </Col>

                        <Col span={12}>
                            <FormItem {...formItemLayout} label='职称:'>
                                {getFieldDecorator('duties', {
                                    initialValue: this.state.editRecord ? this.state.editRecord.duties : '',
                                    rules: [{
                                        required: true, message: '必填'
                                    }],
                                })(
                                    <Input placeholder="必填" size='small' style={{ display: 'inline-block', width: 130 }} disabled={this.state.evFlag} />
                                    )}
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem {...formItemLayout} label='城市/区域:'>
                                {getFieldDecorator('city', {
                                    initialValue: initCity,
                                    rules: [{
                                        required: false,
                                    }],
                                })(
                                    <Cascader size="small" options={this.props.areaOptions} placeholder='' style={{ display: 'inline-block', width: 130 }} disabled={this.state.evFlag} />
                                    )}
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem {...formItemLayout} label='登录名:'>
                                {getFieldDecorator('username', {
                                    initialValue: this.state.editRecord ? this.state.editRecord.username : '',
                                    rules: [{
                                        required: false, message: '登录名!',
                                    }],
                                })(
                                    <Input placeholder="" size='small' style={{ display: 'inline-block', width: 130 }} disabled={this.state.evFlag} />
                                    )}
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem {...formItemLayout} label='登陆口令:'>
                                {getFieldDecorator('password', {
                                    initialValue: this.state.editRecord ? this.state.editRecord.password : null,
                                    rules: [{
                                        required: false, message: '登陆口令!',
                                    }],
                                })(
                                    <Input placeholder="" size='small' type='password' style={{ display: 'inline-block', width: 130 }} disabled={this.state.evFlag} />
                                    )}
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem {...formItemLayout} label='角色:'>
                                {getFieldDecorator('role', {
                                    initialValue: this.state.editRecord ? this.state.editRecord.role : '',
                                    rules: [{
                                        required: false, message: '角色!',
                                    }],
                                })(
                                    <Select size="small" allowClear style={{ display: 'inline-block', width: 130 }} disabled={this.state.evFlag}>
                                        <Option key={'0'} value={'0'}>管理员</Option>
                                        <Option key={'1'} value={'1'}>用户</Option>
                                    </Select>
                                    )}
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem  {...formItemLayout} label="登陆权限:">
                                {getFieldDecorator('flag', {
                                    initialValue: this.state.editRecord ? this.state.editRecord.flag + '' : '0',
                                    rules: [{
                                        required: true, message: '请输入内容!'
                                    }]
                                })(
                                    <RadioGroup style={{ display: 'inline-block', width: 130 }} disabled={this.state.evFlag}>
                                        <Radio value={'0'}>无</Radio>
                                        <Radio value={'1'}>有</Radio>
                                    </RadioGroup>
                                    )}
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem {...formItemLayout} label='手机号:'>
                                {getFieldDecorator('tel', {
                                    initialValue: this.state.editRecord ? this.state.editRecord.tel : '',
                                    rules: [{
                                        required: false, message: '手机号!',
                                    }, {
                                        pattern: /(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}\-))?(1[358]\d{9})$)/,
                                        message: '格式不正确'
                                    }],
                                })(
                                    <Input placeholder="" size='small' style={{ display: 'inline-block', width: 130 }} disabled={this.state.evFlag} />
                                    )}
                            </FormItem>
                        </Col>
                        <Col span={12}>
                            <FormItem {...formItemLayout} label='邮箱:'>
                                {getFieldDecorator('email', {
                                    initialValue: this.state.editRecord ? this.state.editRecord.email : '',
                                    rules: [{
                                        required: false, message: '邮箱!',
                                    }, {
                                        pattern: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
                                        message: '格式不正确'
                                    }],
                                })(
                                    <Input placeholder="" size='small' style={{ display: 'inline-block', width: 130 }} disabled={this.state.evFlag} />
                                    )}
                            </FormItem>
                        </Col>
                        <Col span={24}>
                            <FormItem  {...psLayout} label='住址:'>
                                {getFieldDecorator('addr', {
                                    initialValue: this.state.editRecord ? this.state.editRecord.addr : '',
                                    rules: [{
                                        required: false, message: '住址!',
                                    }],
                                })(
                                    <Input placeholder="" size='small' disabled={this.state.evFlag} />
                                    )}
                            </FormItem>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

const EidtDataForm = Form.create()(EidtData);

class EidtDataFormM extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            visible: false
        };
    }

    componentWillMount() {
        if (this.props.editObj && this.props.editObj.editRecord) {
            this.setState({
                visible: this.props.editObj.editModalVisible,
                editRecord: this.props.editObj.editRecord,
                evFlag: this.props.editObj.evFlag
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.editObj && nextProps.editObj.editModalVisible !== this.state.visiblle) {
            this.setState({
                visible: nextProps.editObj.editModalVisible,
                editRecord: nextProps.editObj.editRecord,
                evFlag: nextProps.editObj.evFlag
            });
        }
    }

    handleOk = (e) => {
        let _self = this;        
        this.refs.editData.validateFields((err, values) => {
            if (!err) {
                if (values.city) {
                    if (values.city.length == 2) {
                        values.area = values.city[1];
                        values.city = values.city[0];
                    } else {
                        values.area = '';
                        values.city = values.city[0];
                    }
                }
                values = Object.assign({}, _self.state.editRecord, values);
                this.props.editOpt(values);
                this.props.changeModalState();
            }
        });


    }

    handleCancel = () => {

        this.setState({
            visible: false
        });
        this.props.changeModalState();
    }

    render() {
        return (
            <div>
                <Modal
                    title={this.state.evFlag ? '查看用户信息' : '修改用户信息'}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    maskClosable={false}
                    width={760}
                    footer={!this.state.evFlag ? [
                        <Button key="back" size="large" onClick={this.handleCancel}>取消</Button>,
                        <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk}>确定</Button>
                    ] : null}
                >
                    <EidtDataForm {...this.props} ref="editData" recordObj={this.state} />
                </Modal>
            </div>
        )
    }
}

EidtDataFormM.propTypes = {
    queryOpt: React.PropTypes.func.isRequired,
    addOpt: React.PropTypes.func.isRequired
}

export default EidtDataFormM;