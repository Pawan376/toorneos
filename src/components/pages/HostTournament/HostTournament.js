import React,{Component} from 'react';
import { Select,Upload, message, Button} from 'antd';
import routes from "../../../routes";

class HostTournament extends Component {
	constructor(props){
		super(props);
		this.state={
			name:'',
			address:'',
			value:''
		} 
	}
	onNameChange = (event)=>{
		this.setState({name : event.target.value})
	}
	onAddressChange = (event)=>{
		this.setState({address : event.target.value})
	}
	onSportChange=(value)=>{
		this.setState({value : value})
	}
	handleClick = (user) => {
		this.props.history.push(routes.masterForm);
		this.props.loadUser(this.state);
	  };

	 

	render() {
		const { Option } = Select;

 		const props = {
						name: 'file',
						action: '//jsonplaceholder.typicode.com/posts/',
						headers: {
						    	authorization: 'authorization-text',
						  	},
						onChange(info){
							    if (info.file.status !== 'uploading') {
							      console.log(info.file, info.fileList);
							    }
							    if (info.file.status === 'done') {
							      message.success(`${info.file.name} file uploaded successfully`);
							    } else if (info.file.status === 'error') {
							    	console.log('file upload failed');
							      message.error(`${info.file.name} file upload failed.`);
							    }
							  },
							};

		function onBlur() {
		  console.log('blur');
		}

		function onFocus() {
		  console.log('focus');
		}

		function onSearch(val) {
		  console.log('search:', val);
		}

		const isEmpty =  this.state.name.length > 0 && this.state.address.length > 0 && this.state.value.length > 0

		return (
			<div className="px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto bg">
				<div className="card2 card border-0 px-4 py-5 bg-light  " id="HostTournament">
                    <div className="row mb-4 px-3">
	                    <h3 className="mb-0 mr-4 mt-2 ">Start Hosting Your Tournament</h3>
				    </div>
				  
				    <div className="row px-3 mt-2"> 
				    	<label className="mb-1">
				        	<h6 className="mb-0 text-sm">Name of your tournament</h6>
			            </label> 
			            <input 
			            	className="mb-4" 
			            	type="text" 
			            	name="name" 
			            	placeholder="Sahid Mohan Singh Memorial Season 2" 
			            	id="name"
			            	onChange={this.onNameChange} 
			            />
			        </div>

				    
				    	<label className="mb-1 ml-0 ">
				            <h6 className="mb-0 text-sm">Sport</h6>
				        </label> 
				        <div> 
				        <Select className="mb-4"
						    showSearch
						    style={{ width: '100%' }}
						    placeholder="Select sport"
						    optionFilterProp="children"
						    onChange={this.onSportChange}
						    onFocus={onFocus}
						    onBlur={onBlur}
						    onSearch={onSearch}
						    filterOption={(input, option) =>
						      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
						    }
						    required
						  >
						    <Option value="Badminton">Badminton</Option>
						    <Option value="Basketball">Basketball</Option>
						    <Option value="Chess">Chess</Option>
						    <Option value="Cricket">Cricket</Option>
						    <Option value="eSports">eSports</Option>
						    <Option value="Football">Football</Option>
						    <Option value="Handball">Handball</Option>
						    <Option value="Hockey">Hockey</Option>
						    <Option value="Squash">Squash</Option>
						    <Option value="Table Tennis">Table Tennis</Option>
						    <Option value="Tennis">Tennis</Option>
						    <Option value="Volleyball">Volleyball</Option>
						  </Select>
				    </div>
				     <div className="row px-3 mt-2"> 
				    	<label className="mb-1">
				        	<h6 className="mb-0 text-sm">Location</h6>
			            </label> 
			            <input className="mb-4" type="text" name="adderss" id="adderss" placeholder="Haldwani" onChange={this.onAddressChange} />
			        </div>
					<div className="row px-3 mt-2"> 
				    	<label className="mb-1 mr-2">
				        	<h6 className="mb-0 text-sm">Please select a picture (optional) </h6>
			            </label> 
			            <Upload {...props} className="mb-4 " >
						    <Button>
						      <i className="fa fa-upload" aria-hidden="true"></i> &nbsp;Click to Upload
						    </Button>
						</Upload>
			        </div>
				    <div className="row mb-3 px-3"> 
				    	<button 
				    		type="submit" 
				    		className="btn btn-blue text-center"
				    		disabled={!isEmpty}
				    		onClick={this.handleClick}
				    	>
				    		Continue
				    	</button> 
				    </div>
				</div>
			</div>
		)
	}
}
export default HostTournament;