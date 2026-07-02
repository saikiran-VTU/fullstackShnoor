import { Component } from "react";
import "./index.css"
class TaskDetailsCard extends Component{
    render(){
        return(
            <div className="bg-container">
                <div className="bg-card-container">
                    <p>title</p>
                    <p>discription</p>
                    <p>Progress</p>
                </div>
                
            </div>
        )
    }
}
export default TaskDetailsCard