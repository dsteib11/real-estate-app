import React, {Component} from 'react'

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Desi'
    }
    this.loopListings = this.loopListings.bind(this)
  }
  loopListings () {
    var {listingsData} = this.props

    if(listingsData == undefined || listingsData.length == 0) {
        return "Sorry your filter didn't match the listings"
      }
      return listingsData.map((listing, index) => {
        if(this.props.globalState.view == "grid") {
          return (<div className="grid" key={index}>
                  <div className="listing">
                    <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
                    <span className="address">{listing.address}</span>
                      <div className="details-area">
                        <div className="user-details">
                          <div className="user-img"></div>
                          <div className="info">
                          <div className="user-name">Jordan Brown</div>
                          <div className="post-date">Posted on 7/27/18</div>
                          </div>
                        </div>
                        <div className="listing-details">
                          <div className="floorSpace">
                            <i className="far fa-square"></i>
                            <span>{listing.floorSpace}ft&sup2;</span>
                          </div>
                          <div className="bedrooms">
                            <i className="fas fa-bed"></i>
                            <span>{listing.rooms}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="detail-info">
                      <div className="price">
                        <span>
                          <i className="fas fa-dollar-sign"></i>
                            {listing.price}
                        </span>
                      </div>
                      <div className="location">
                        <span>
                          <i className="fas fa-map-pin"></i>
                            {listing.city}, {listing.state}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>)
            }
          })
        }
  render () {
    return(<section id="listings">
          <div className="listings-container">
            <section className="search-area">
              <div className="inputWithIcon">
                <input type="text" name="search" placeholder="Where To?"  onChange = {this.props.change}/>
              </div>
            </section>
            <section className="sort-area">
              <div className="results"> {this.props.globalState.filteredData.length} results found</div>
              <div className="sort-options">
                <select name="sortby" className="sortby" onChange={this.props.change}>
                <option value="price-dsc">Lowest Price</option>
                <option value="price-asc">Highest Price</option>
                </select>
                <div className="view">
                  <i className="fas fa-th" onClick={this.props.changeView.bind(null, "grid")}></i>
                </div>
              </div>
            </section>

            <section className="listings-results">
              <div className="grid">
                {this.loopListings()}
              </div>
              <section id="pagination">
                <ul className="pages">
                  <li className="prev">Prev</li>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>5</li>
                  <li className="next">Next</li>
                </ul>
              </section>
            </section>
          </div>
        </section>
    )
  }
}
