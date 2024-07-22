import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles = []

  constructor () {
    super();
    console.log( "i am a constructor from news component" );
    this.state = {
      articles: [],
      loading: false
    }
  }

  // this cdm runs before the render method
  async componentDidMount() {
    // console.log("cdm");

    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=719ecbfd26b14d7ab66580f01803706a";

    let data = await fetch(url);

    let parsedData = await data.json();
    // console.log(parsedData);

    this.setState({articles : parsedData.articles})
  }

  render () {
    console.log("render")
    return (
      <div className='container my-3'>
        <h1>NewsAdda - Top Headlines</h1>
        <div className="row">
          { this.state.articles.map( ( element ) => {
            return <div className='col-md-4'key={element.url}>
              <NewsItem title={element.title? element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          } ) }
    
        </div>
      </div>
    )
  }
}

export default News
