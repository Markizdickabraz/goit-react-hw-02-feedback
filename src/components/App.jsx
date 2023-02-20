import React, { Component } from "react";
import Section from "./sectionTitle";
import FeedbackOptions from "./feedbackOption";


class App extends Component{
  state = {
          good: 0,
          neutral: 0,
          bad: 0
      };
      
  btnClick = (options) => {
    console.dir(options)
    this.setState({
        [options]: options +1  
    })
  }
  
//   btnClickGood = () => {
//     this.setState(prevState => {
//       return {
//     good: prevState.good + 1 
//     }
//     })
//   }
//   btnClickNeutral = () =>{
//     this.setState(prevState => {
//       return {
//         neutral: prevState.neutral + 1
//       }
//     })
//   }

//   btnClickBad = () => {
//      this.setState(prevState => {
//       return {
//         bad: prevState.bad + 1
//       }
//     })
//   }

//   countTotalFeedback() {
//     const total = this.state.good + this.state.neutral + this.state.bad;
//     return total;
//   }

    
  render() { 
        
          return (
            <div>
              <Section title="Plese leave feedback"></Section>
              <FeedbackOptions options={['good' , 'neutral', 'bad']} onLeaveFeedback={this.btnClick}>
              </FeedbackOptions>
              {/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics> */}
            </div>
          )
      }
  }

export default App;