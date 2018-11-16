import React,{Component} from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';

class ComingSoon extends Component{

	constructor(props){
		super(props);
		this.state = {
			movies:[],
			name:''
		}
	}

	componentWillMount(){
		axios.get('../app/json/comingsoon.json')
		.then(response=>{
			this.setState({
				movies:response.data.subjects
			});
		})
		.catch(error=>{
			console.log(error);
		})
	}

	render(){
		return (
			<div>
				{
					this.state.movies.map((item,key)=>{
						return (
								<Col span={6} key={key}>
									<img style={{height:'150px',width:'100px',cursor:'pointer'}} src={item.images.small} />
									<h6 style={{cursor:'pointer'}}>{item.title}</h6>
								</Col>
						)
					})
				}
			</div>
		)
	}
}

export default ComingSoon;