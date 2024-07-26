import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {

  articles = []

  CapitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1) ; 
  }

  constructor (props) {
    super(props);
    console.log( "i am a constructor from news component" );
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `NEWS ADDA - ${this.CapitalizeFirstLetter(this.props.category)}`;
  }

  static defaultProps = {
      country:"in",
      pageSize:15,
      category : 'general'
    }
  
    static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
    }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=719ecbfd26b14d7ab66580f01803706a&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading : true })
    let data = await fetch( url );
    let parsedData = await data.json();
    // console.log(parsedData);

    this.setState( { 
      articles: parsedData.articles , 
      totalResults: parsedData.totalResults,
      loading : false
    } )
  }

  // this cdm runs before the render method
  async componentDidMount () {
    // console.log("cdm");

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=719ecbfd26b14d7ab66580f01803706a&page=1&pageSize=${this.props.pageSize}`;
    // let data = await fetch( url );
    // this.setState({loading : true })
    // let parsedData = await data.json();
    // // console.log(parsedData);

    // this.setState( { 
    //   articles: parsedData.articles , 
    //   totalResults: parsedData.totalResults,
    //   loading : false
    // } )

    this.updateNews();

  }

  handlePrevClick = async() =>  {
    // console.log("prev clicked");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=719ecbfd26b14d7ab66580f01803706a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading : true})
    // let data = await fetch( url );
    // let parsedData = await data.json();
    // console.log(parsedData);

    // this.setState( {
    //   page : this.state.page - 1, 
    //   articles: parsedData.articles,
    //   loading : false
    // } )
    this.setState({page:this.state.page - 1});
    this.updateNews();
  }

  handleNextClick = async() => {
    console.log("Next clicked");
    // if(this.state.page +1 <= Math.ceil(this.state.totalResults/this.props.pageSize)) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=719ecbfd26b14d7ab66580f01803706a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading : true})
    //   let data = await fetch( url );
    //   let parsedData = await data.json();
    //   console.log(parsedData);

    //   this.setState( { 
    //     page : this.state.page + 1 ,
    //     articles: parsedData.articles,
    //     loading : false
    //   } )
    // }
    this.setState({page:this.state.page + 1});
    this.updateNews();
  }

  render () {
    // console.log( "render" )
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsAdda - Top {this.CapitalizeFirstLetter(this.props.category)} Headlines</h1>
        {/* {this.state.loading && <Spinner/>} */}
        <div className="row">
          { !this.state.loading && this.state.articles.map( ( element ) => {
            return <div className='col-md-4' key={ element.url }>
              <NewsItem title={ element.title ? element.title : "" } description={ element.description ? element.description : "" } imageUrl={ element.urlToImage } newsUrl={ element.url } author={!element.author?"Unknown":element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          } ) }
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} >&larr; Previous</button>
          <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
