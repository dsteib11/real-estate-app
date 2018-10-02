import React, {Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Desi'
    }
    this.cities = this.cities.bind(this)
    this.homeType = this.homeType.bind(this)
    this.bedrooms = this.bedrooms.bind(this)
  }
  componentWillMount() {
    this.props.populateAction()
  }
  cities() {
    if(this.props.globalState.populateFormsData.cities != undefined) {
        var { cities } = this.props.globalState.populateFormsData

        console.log(cities)
        return cities.map((item) => {
          return (
            <option key={item} value={item}>{item}</option>
          )
        })
      }
    }
  homeType() {
    if(this.props.globalState.populateFormsData.homeType != undefined) {
        var { homeType } = this.props.globalState.populateFormsData

        console.log(homeType)
        return homeType.map((item) => {
          return (
            <option key={item} value={item}>{item}</option>
          )
        })
      }
    }
  bedrooms() {
    if(this.props.globalState.populateFormsData.bedrooms != undefined) {
        var { bedrooms } = this.props.globalState.populateFormsData

        console.log(bedrooms)
        return bedrooms.map((item) => {
          return (
            <option key={item} value={item}>{item} + BR</option>
          )
        })
      }
    }
  render () {
    return(
        <section id="filter">
          <div className="filter-container">
              <h3>Filter</h3>
              <label htmlFor="city">City</label>
              <select name="city" className="filters city" onChange = {this.props.change}>
              <option value="All">All Cities</option>
                {this.cities()}
              </select>
              <label htmlFor="homeType">Home Type</label>
              <select name="homeType" className="filters homeType" onChange = {this.props.change}>
                <option value="All">All Homes</option>
                {this.homeType()}
              </select>
              <label htmlFor="bedrooms">Bedrooms</label>
              <select name="bedrooms" className="filters bedrooms" onChange = {this.props.change}>
              {this.bedrooms()}
              </select>
              <div className="filters price">
                <span className="title">
                  Price
                </span>
                <input type='text' name="min_price" placeholder="min_price" className="min_price"  onChange = {this.props.change} value={this.props.globalState.min_price} />
                <input type='text'
                placeholder="max_price" name="max_price" className="max_price"  onChange = {this.props.change} value={this.props.globalState.max_price} />
              </div>
              <div className="filters floor_space">
                <span className="title">
                  Floor Space
                </span>
                <input type='text' name="min_floor_space" className="min_floor_space"  onChange = {this.props.change} value={this.props.globalState.min_floor_space} />
                <input type='text' name="max_floor_space" className="max_floor_space"  onChange = {this.props.change} value={this.props.globalState.max_floor_space}/>
              </div>
              <div className="filters extras">
                <span className="title">
                  <h3>Extras</h3>
                </span>
                <label htmlFor="extras">
                  <span>Elevator</span>
                  <input name="elevator" value="elevator" type="checkbox"  onChange = {this.props.change}/>
                </label>
                <label htmlFor="extras">
                  <span>Swimming pool</span>
                  <input name="swimming_pool" value="swimming_pool" type="checkbox"  onChange = {this.props.change}/>
                </label>
                <label htmlFor="extras">
                  <span>Gym</span>
                  <input name="gym" value="gym" type="checkbox"  onChange = {this.props.change}/>
                </label>
                <label htmlFor="extras">
                  <span>Finished Basement</span>
                  <input name="basement" value="basement" type="checkbox"  onChange = {this.props.change}/>
                </label>
              </div>
            </div>
          </section>
        )
      }
  }
