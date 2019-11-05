
class Team extends React.Component {

  constructor(props){
    super(props)
    
    this.state ={
      shots : 0,
      score: 0
    }

  }

    shotHandler = () => {
      let score = this.state.score

      if (Math.random() > 0.5) {
        score += 1
      }
      this.setState((state, props) => ({
          shots: state.shots + 1,
          score
      }))
    }

      
    

  render(){
    return (<h1>Yay! I'm {this.props.name} 
    <img alt="team logo" width="200px" src= {this.props.logo} />
    shots: {this.state.shots}
    score : {this.state.score}
     <button onClick={this.shotHandler}>shot</button>
     </h1>)
   
  }

}
// Deafault App component that all other compents are rendered through
function App(props){
  return (
    <div>
      {/* <h1>Welcome to the sports game starter</h1>
      This file represents the code after completing the setup step in the lab instructions */}
    <div className = "stats">
    <Team name="The Home Team" logo= "bears.png"/>
      <div className = "versus">
        <h1>vs</h1>
      </div>
    <Team name="The Away Team" logo= "colts.jpg" />
    </div>
    </div>
  )
}

//Render the application
ReactDOM.render(
  <App />,
  document.getElementById('root')
);