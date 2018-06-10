import React from 'react';
import {Form, Card, Select, Input, Spin, Button, Avatar} from 'antd';

class CreateProduct extends React.Component {

    componentDidMount() {
        this.props.initialActions()
    }

    componentWillReceiveProps(next) {
        if (this.props.creatingProduct && !next.creatingProduct) {
            this.setState({
                name: '',
                description: '',
                categories: [],
                brand: null,
                submitted: false,
                loading: false,
                url: '',
            })
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            categories: [],
            brand: null,
            submitted: false,
            loading: false,
            url: ''

        };
    }

    render() {
        // TODO: consider using form manager (i,e redux form) for form validation
        const {brands, categories, fetchingCategories, fetchingBrands} = this.props;
        return (
            <Card>
                <Form
                    onSubmit={() => {
                        this.setState({submitted: true});
                        if (this.state.name !== '' && this.state.brand) {
                            this.setState({loading: true});
                            this.props.createProduct({
                                name: this.state.name,
                                description: this.state.description,
                                categories: this.state.categories,
                                brand: this.state.brand,
                                url : this.state.url
                            })
                        }
                    }}
                    className="login-form">
                    <Form.Item
                        help={this.state.submitted && this.state.name === '' ? 'Name is mandatory' : ''}
                        validateStatus={this.state.submitted && this.state.name === '' ? 'error' : ''}
                    >
                        <Input
                            placeholder="Product name"
                            onChange={({target: {value}}) => {
                                this.setState({name: value})
                            }}
                            value={this.state.name}
                        />
                    </Form.Item>
                    <Form.Item

                        help={this.state.submitted && this.state.description === '' ? 'Description is mandatory' : ''}
                        validateStatus={this.state.submitted && this.state.description === '' ? 'error' : ''}
                    >
                        <Input
                            placeholder="Product description"
                            onChange={({target: {value}}) => {
                                this.setState({description: value})
                            }}
                            value={this.state.description}
                        />
                    </Form.Item>

                    <Form.Item
                        help={this.state.submitted && !this.state.brand ? 'Please select a brand for your product' : ''}
                        validateStatus={this.state.submitted && !this.state.brand ? 'error' : ''}>
                        <Spin spinning={fetchingBrands}>
                            <Select
                                placeholder="Please select a Brand"
                                onSelect={(brandId) => {
                                    this.setState({brand: brandId})
                                }}>
                                {brands.map(brand => <Select.Option
                                    key={brand.get('id')}
                                >{brand.get('name')}</Select.Option>)}
                            </Select>
                        </Spin>
                    </Form.Item>
                    <Form.Item >
                        <Spin spinning={fetchingCategories}>
                            <Select
                                placeholder="Please select categories"
                                mode="multiple"

                                onChange={(categories) => {
                                    this.setState({categories})
                                }}>
                                {categories.map(category => <Select.Option
                                    key={category.get('id')}>{category.get('name')}</Select.Option>)}
                            </Select>
                        </Spin>
                    </Form.Item>
                    <Form.Item>
                        <Input
                            placeholder="Product image url"
                            onChange={({target: {value}}) => {
                                this.setState({url: value})
                            }}
                            value={this.state.url}
                        />
                        <Avatar src={this.state.url}/>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            loading={this.state.loading}
                            type="primary" htmlType="submit" className="login-form-button">
                            Save Product
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        );
    }
}
export default CreateProduct;
