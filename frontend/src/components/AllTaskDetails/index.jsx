import {Component} from "react";
import "./index.css";
import TaskDetailsCard from "../TaskDetailsCard";

class AllTaskDetails extends Component {
   state ={
        TaskDetailsList :[]
    }

    getTaskDetails = async ()=>{
        const url =""
        const options = {
            method :"GET"
        }
        const reponse = await fetch(url,options)
        if(response.ok === true){
            const data = await reponse.json()
        }
        this.setState({
            TaskDetailsList :data
        })

    }

    componentDidMount(){
        this.getTaskDetails()
    }
  render() {
    const {TaskDetailsCard} = this.state
    return (
      <div className="bg-container">
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search"
            className="search-icon"
          />
          <input
            type="search"
            placeholder="Search Data By Name"
            className="search-input"
          />
          <ul>
           <TaskDetailsCard/>
        </ul>
        </div>
    
      </div>
      
    );
  }
}

export default AllTaskDetails;