import React, { Component } from 'react';
import {fetchData} from './api';
import Cards from './components/cards/cards';
import Charts from './components/charts/charts'
import Country from './components/country/country'
import './App.css';

class App extends Component {
  state = {
    data: { },
    country : ''
  }

  async componentDidMount() {
      const respo = await fetchData();
      this.setState({ data : respo});
  }

  handleCountry = async (country) => {
    const countryRespo = await fetchData(country);
    this.setState({ data : countryRespo, country: country});
  }

  render() { 
    const { data, country } = this.state;
    return ( 
      <React.Fragment>
          <Cards data={ data }/>
          <Charts data={ data } country={country} />
          <Country handleCountry={this.handleCountry}/>
      </React.Fragment>
     );
  }
}
 
export default App;