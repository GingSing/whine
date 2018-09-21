import React, { Component } from 'react';
import './NewsFeed.css';

import FeedCard from './FeedCard';

class NewsFeed extends Component{
  constructor(props){
    super(props);

    this.updateFeed=this.updateFeed.bind(this);

    this.state={
      feed: [],
      page: 0
    }
  }

  componentWillMount(){
    this.updateFeed();
  }

  updateFeed(){
    fetch(`http://localhost:3001/reviews`)
    .then(res => res.json())
    .then((data) => {
      this.setState({
        feed: data
      });
    })
    .catch((error) =>{
      console.log(error);
    })
  }

  render(){
    return(
      <div className="news-feed">
        <h3 className="feed-header"> New Reviews </h3>
        <div className="feed">
          <ul className="feed-list">
            {
              this.state.feed.map((data, key) => {return <li key={ key }><FeedCard data={this.props.data} /></li>})
            }
          </ul>
          <div className="feed-page-selector">
          </div>
        </div>
      </div>
    );
  }
}

export default NewsFeed;
