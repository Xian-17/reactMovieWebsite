import React, {Component} from 'react';
import {BrowserRouter,HashRouter,Route,Link,Redirect} from "react-router-dom";

import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import { Row, Col } from 'antd';
import { Pagination } from 'antd';

import ThreaterMovies from '../movies/TheaterMovies.jsx';
import Main from '../main/Main.jsx';
import ComingSoon from '../comingsoon/ComingSoon.jsx';
import Top from '../top/Top.jsx';

class App extends Component {

	constructor() {
		super();
		this.state = {
			currentPage: 1,
			pageSize: 8,
			total: 20
		}
	}

	render() {
		return (
			<HashRouter>
				<Layout style={{height: '100%'}}>
				    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', height:'44px', lineHeight:'44px' }}>
					    <div className="logo" />
					    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '44px' }}>
						    <Menu.Item key="1"><Link to='/main' replace>主页</Link></Menu.Item>
					        <Menu.Item key="2"><Link to='/threater' replace>正在热映</Link></Menu.Item>
					        <Menu.Item key="3"><Link to='/coming' replace>即将上映</Link></Menu.Item>
					        <Menu.Item key="4"><Link to='/top' replace>Top250</Link></Menu.Item>
				      	</Menu>
				    </Header>
				    <Content style={{ height:'100%', background: '#fff', padding: '0 50px', marginTop: 44}}>
				    	<div>
							<Redirect from='/' to='/main' replace/>
							<Row><Route path='/main' component={Main} /></Row>
							<Route path='/threater' component={ThreaterMovies} />
							<Route path='/coming' component={ComingSoon} />
							<Route path='/top' component={Top} />						   
						</div>
						<div style={{height: '10%'}}>
							<Pagination style={{textAlign: 'center'}} defaultCurrent={this.state.currentPage} defaultPageSize={this.state.pageSize} total={this.state.total} />
						</div>
				    </Content>
			  </Layout>
		</HashRouter>
		)
	}
}

export default App;