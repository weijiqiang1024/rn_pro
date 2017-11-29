/**
 * Created by zll on 2017/10/11.
 */
import React from 'react';
import styles from './loginForm.css';
// import logImg from "../../../public/images/landun_logo.png";
import logImg from "../../../idea_large.svg";
import {
    Form,
    Icon,
    Input,
    Button,
    Checkbox,
    Tooltip
} from 'antd';
const FormItem = Form.Item;

class LoginF extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            loginFlag: 0,
            loginTable: true
        };
        //this.handleSubmit=this.handleSubmit.bind(this);
    }
    componentDidMount() {}
    componentWillReceiveProps(nextProps) {
        if (this.state.loading) {
            ///登录成功
            if (nextProps.loginRet === 0) {
                nextProps.location.pathname = '/main/monitor';
                nextProps
                    .history
                    .push(nextProps.location);

                // //请求数据字典
                this
                    .props
                    .querySysdic();
                this
                    .props
                    .queryArea();
                this
                    .props
                    .queryFactor();
                this
                    .props
                    .queryMonitorSite();
                //区域关联监测点组
                this
                    .props
                    .queryMonitorSiteGroup();

            } else {
                this.setState({loading: false, loginFlag: nextProps.loginRet});
            }
        }

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this
            .props
            .form
            .validateFields((err, values) => {
                if (!err) {
                    let param = {
                        username: values.userName,
                        password: values.password
                    };
                    this.setState({loading: true, loginFlag: 0});
                    this
                        .props
                        .submitClick(param);
                }
            });
    };

    lor = (e) => {
        this.setState({
            loginTable: (e.target.id == 'login'
                ? true
                : false)
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        let activeStyle = {
            padding: '10px',
            fontWeight: 700,
            color: '#ea6f5a',
            borderBottom: '2px solid #ea6f5a'
        }

        let unActiveStyle = {
            padding: '10px',
            color: '#969696'
        }

        return (

            <div className={styles.formLogin}>
                <h4 className={styles.title}>
                    <div className={styles.header}>
                        <a
                            id='login'
                            style={this.state.loginTable
                            ? activeStyle
                            : unActiveStyle}
                            onClick={this.lor}>
                            登录
                        </a>
                        <b>·</b>
                        <a
                            id='reg'
                            style={!this.state.loginTable
                            ? activeStyle
                            : unActiveStyle}
                            onClick={this.lor}>
                            注册
                        </a>
                    </div >
                </h4>
                {this.state.loginTable
                    ? <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
                            <FormItem >
                                {getFieldDecorator('userName', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入用户名!'
                                        }
                                    ]
                                })(
                                    <Input
                                        prefix={< Icon type = "user" style = {{ fontSize: 13 }}/>}
                                        placeholder="用户名"/>
                                )}
                            </FormItem>
                            <FormItem >
                                {getFieldDecorator('password', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入密码!'
                                        }
                                    ]
                                })(
                                    <Input
                                        prefix={< Icon type = "lock" style = {{ fontSize: 13 }}/>}
                                        type="password"
                                        placeholder="密码"/>
                                )}
                            </FormItem>

                            <FormItem >
                                <div
                                    style={{
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    {getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true
                                    })(
                                        <Checkbox >
                                            记住密码
                                        </Checkbox>
                                    )}
                                    <a style={{color:'gray'}}>
                                        登录遇到问题？
                                    </a>
                                </div>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className={styles.loginFormButton}
                                    loading={this.state.loading}>
                                    登陆
                                </Button>

                                <div
                                    style={{
                                    display: this.state.loginFlag > 0
                                        ? 'block'
                                        : 'none'
                                }}>
                                    <Tooltip title="登录失败">
                                        <span
                                            style={{
                                            color: "red"
                                        }}>用户名密码不匹配.
                                        </span>
                                    </Tooltip >
                                </div>
                            </FormItem >
                            <div className={styles.box}>
                                <h6>社交账号登录</h6>
                            </div>
                            

                        </Form>
                    : <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
                        <FormItem >
                            {getFieldDecorator('userName', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入用户名!'
                                    }
                                ]
                            })(
                                <Input
                                    prefix={< Icon type = "user" style = {{ fontSize: 13 }}/>}
                                    placeholder="用户名"/>
                            )}
                        </FormItem>
                        <FormItem >
                            {getFieldDecorator('tel', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入用户名!'
                                    }
                                ]
                            })(
                                <Input
                                    prefix={< Icon type = "tablet" style = {{ fontSize: 13 }}/>}
                                    placeholder="用户名"/>
                            )}
                        </FormItem>
                        <FormItem >
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入密码!'
                                    }
                                ]
                            })(
                                <Input
                                    prefix={< Icon type = "lock" style = {{ fontSize: 13 }}/>}
                                    type="password"
                                    placeholder="密码"/>
                            )}
                        </FormItem>
                        <FormItem >
                            <Button
                                type="primary"
                                htmlType="submit"
                                className={styles.loginFormButton}
                                loading={this.state.loading}>
                                登陆
                            </Button>
                            <div
                                style={{
                                display: this.state.loginFlag > 0
                                    ? 'block'
                                    : 'none'
                            }}>
                                <Tooltip title="注册失败">
                                    <span
                                        style={{
                                        color: "red"
                                    }}>用户名密码不匹配.
                                    </span>
                                </Tooltip >
                            </div>
                        </FormItem >
                    </Form>
}

            </div >

        );
    }
}
LoginF.propTypes = {
    submitClick: React.PropTypes.func.isRequired
};

const LoginForm = Form.create()(LoginF);
export default LoginForm;