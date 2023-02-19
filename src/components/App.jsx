import React, {Component} from "react";


class App extends Component{
  state = {
          good: 0,
          neutral: 0,
          bad: 0
      };
      
  btnClickGood = () =>{
    this.setState(prevState => {return {
      good: prevState.good + 1
    }
    })
    
  }
  btnClickNeutral = () =>{
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1
      }
    })
  }

  btnClickBad = () => {
     this.setState(prevState => {
      return {
        bad: prevState.bad + 1
      }
    })
  }

  countTotalFeedback() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }
  countPositiveFeedbackPercentage = () => {
    let positive = 0;
    if (!this.state.good || !this.countTotalFeedback) {
      return;
    }
    positive = Number.parseInt(this.state.good) / Number.parseInt(this.countTotalFeedback) * 100;
    console.log(positive);
    return positive;
 }
    
      render() { 
          return (
            <div>
              <h1>Please leave feedback</h1>
              <ul className="list"> 
                <li><button type='button' onClick={() => {this.btnClickGood()}}>good</button></li>
                <li><button type='button' onClick={() => {this.btnClickNeutral()}}>neutral</button></li>
                <li><button type='button' onClick={()=> {this.btnClickBad()}}>bad</button></li>
              </ul>
              <h3>Statistics</h3>
              <ul className="list">
                <li>good:{this.state.good}</li>
                <li>neutral:{this.state.neutral}</li>
                <li>bad:{this.state.bad}</li>
                <li>total:{this.countTotalFeedback()}</li>
                <li>Posiviti feedback:{this.countPositiveFeedbackPercentage()}%</li>
              </ul>
            </div>

          )
      }
  }

export default App;