
import fetch from 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import data from '../pizza.json';

 // CSS For NORMAL DESIGN
var buttonStyle = {
  float: 'right'
};
var inputStyle = {
  padding: '15%'
};

class App extends React.Component{
  constructor() {
		super();
    this.state = {
      pizzas:[],
      filteredPizzas:[]      
    };

  }


componentDidMount() {
/*  FOR FETCHING JSONFILE */
     fetch('./pizza.json')
    .then((res) => res.json())
    .then((data) => { 
    	this.setState({
      pizzas: data.pizzas,
      filteredPizzas: data.pizzas
    })
/*  TWO CONTAINER HERE ONE FOR INTIALIZING IF USER JUST WIPES UP THE TEXT ANOTHER FOR FILTERED RESULTS */
   });
    
}
/*  FOR FILTERING RESULTS ARRAY AND STORE IN FILTEREDPIZZAS, 
WHICH WILL THE UPDATE THE ORIGNAL LIST IN DISPLAY */
filterList(event){
    let FilteredList = this.state.pizzas;

    FilteredList = FilteredList.filter(function(seacrhString){
      return seacrhString.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({filteredPizzas: FilteredList});
  }


/*  FOR SORTING RESULTS ARRAY AND STORE IN FILTEREDPIZZAS, 
WHICH WILL THE UPDATE THE ORIGNAL LIST IN DISPLAY TO BE NOTED IT SORTS 
FILTERD AND NON FILTERED LISTS*/
  sortList(event){
    var SortedList = this.state.filteredPizzas;
    SortedList.sort((a,b) => {
      return b > a;
    });
    
    this.setState({
      filteredPizzas: SortedList
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }
		render() {
			 if (this.state.pizzas !== null) {
        return (
          <ul className="list-group">
          <h1 className="display-3 text-center">Pizza List </h1>
          <div className = "">
            <input type="text" placeholder="Filter Text" className="text-left" onChange={this.filterList.bind(this)} />
              /* INPUT FEILD FOR FILTERING AND BUTTON FOR SORTING */
            <button className = "btn btn-small" style={buttonStyle} onClick={this.sortList.bind(this)}>Sort</button>
          </div>
       {
        this.state.filteredPizzas.map(function (pizza, index) {
            return (
                <li key={index} className="list-group-item text-center app-item">
                    {pizza}
                </li>
            );
        })
    }
      
    </ul>
   
   );
  }
 }
}

export default App;