import React, {Component} from "react";
import CricketChild from "./CricketChild";


class Cricket extends Component{
    constructor(){
        super();
        this.state = {
            count:0
        }
        
    }
    increament = () => {
        console.log('inside increament function..');
        // this.state = {
        //     count: this.state.count + 1
        // }
        // this.forceUpdate();
        console.log(this.state.count);
        this.setState(( {count}) =>({
            count: count + 1
        }));
        console.log(this.state.count); // old value
        console.log('increament function over..');
        // this.setState is an async method : it expects new state object as parameter, not 
    }
    render(){
        return(
            <>
                <div className="">
                    i am at NS
                    <div>
                        abcd
                    </div>
                </div>
                
                <div
                > Count:-{this.state.count}
                <button onClick={this.increament}>increament</button>
                </div>

                <br></br>
                <CricketChild/>
            </>
        )
    }
}

export default Cricket;