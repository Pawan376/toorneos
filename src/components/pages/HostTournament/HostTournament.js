import React,{Component} from 'react';
import { Select } from 'antd';

class HostTournament extends Component {
	render() {
		const { Option } = Select;

		function onChange(value) {
		  console.log(`selected ${value}`);
		}

		function onBlur() {
		  console.log('blur');
		}

		function onFocus() {
		  console.log('focus');
		}

		function onSearch(val) {
		  console.log('search:', val);
		}


		return (
			<div className="px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto bg">
				<div className="card2 card border-0 px-4 py-5 bg-light">
                    <div className="row mb-4 px-3">
	                    <h3 className="mb-0 mr-4 mt-2 ">Start Hosting Your Tournament</h3>
				    </div>
				  
				    <div className="row px-3 mt-2"> 
				    	<label className="mb-1">
				        	<h6 className="mb-0 text-sm">Name of your tournament</h6>
			            </label> 
			            <input className="mb-4" type="text" name="name" placeholder="Sahid Mohan Singh Memorial Season 2"/>
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
						    onChange={onChange}
						    onFocus={onFocus}
						    onBlur={onBlur}
						    onSearch={onSearch}
						    filterOption={(input, option) =>
						      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
						    }
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
			            <input className="mb-4" type="text" name="name" placeholder="Haldwani"/>
			        </div>
				    
				    <div className="row mb-3 px-3"> 
				    	<button 
				    		type="submit" 
				    		className="btn btn-blue text-center"
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