import React from 'react';
import { Form, Icon, Input, Button, Row, Col, Select } from 'antd';

import styles from './searchForm.css';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 1,
            pageSize: 10
        };
    }

    componentDidMount() {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let queryData = {
                    flag: values.flag,
                    username: values.username,
                    pageIndex: this.state.pageIndex,
                    pageSize: this.state.pageSize
                }
                this.props.queryOpt(queryData);
            }
        })
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let queryData = {
                    flag: values.flag,
                    username: values.username,
                    pageIndex: this.state.pageIndex,
                    pageSize: this.state.pageSize
                }
                this.props.queryOpt(queryData);
            }
        })
    }


    render() {

        const { getFieldDecorator } = this.props.form;
        const FormItem = Form.Item;
        const Option = Select.Option;
        const itemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
            }
        };

        return (
            <div className={styles.serchPanel}>
                <Form layout="inline" onSubmit={this.formSubmit}>
                    <Row gutter={8} >
                        <FormItem {...itemLayout} label="用户名:">
                            {getFieldDecorator('username')(
                                <Input size="small" style={{ display: 'inline-block', width: 130 }} />
                            )}
                        </FormItem>
                        <FormItem {...itemLayout} label="登陆权限:">
                            {getFieldDecorator('flag')(
                                <Select size="small" style={{ display: 'inline-block',width: 130 }} allowClear>
                                    <Option value="1">有</Option>
                                    <Option value="0">无</Option>
                                </Select>
                            )}
                        </FormItem>
                        <Button type='primary' size="small" htmlType='submit' style={{ position: 'relative', top: 5 }}>查询</Button>
                    </Row>
                </Form>
            </div>
        )
    }
}

Search.propTypes = {
    queryOpt: React.PropTypes.func.isRequired
}

const SearchForm = Form.create()(Search);

export default SearchForm;