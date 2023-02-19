import React, {Component} from "react";


class App extends Component{
  state = {
          good: 0,
          neutral: 0,
          bad: 0
      };
      
  // btnClick = (e) => {
  //   if (e.target.nodeName !== 'BUTTON') {
  //     return
  //   }
  //   console.dir(e.target);
  //   this.setState(prevState => {
  //     return {
        
  //     }
  //   })
  // }
  
  btnClickGood = () => {
    this.setState(prevState => {
      return {
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
    positive = Number(this.state.good) / Number(this.countTotalFeedback) * 100;
    return positive;
 }
    
      render() { 
          return (
            <div>
              <h1>Please leave feedback</h1>
              <ul className="list"> 
                <li><button type='button' name='good' onClick={this.btnClickGood}>good</button></li>
                <li><button type='button' name= 'neutral' onClick={this.btnClickNeutral}>neutral</button></li>
                <li><button type='button' name='bad' onClick={this.btnClickBad}>bad</button></li>
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