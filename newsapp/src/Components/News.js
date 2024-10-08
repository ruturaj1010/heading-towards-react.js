import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = ( props ) => {

  const [articles, setArticles] = useState( [] )
  const [loading, setLoading] = useState( true )
  const [page, setPage] = useState( 1 )
  const [totalResults, setTotalResults] = useState( 0 )

  const updateNews = async () => {
    props.setProgress( 10 );
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    setLoading( true );
    let data = await fetch( url );
    props.setProgress( 30 );
    let parsedData = await data.json();
    props.setProgress( 70 );
    console.log( parsedData );

    setArticles( parsedData.articles || [])
    setTotalResults( parsedData.totalResults )
    setLoading( false )
    props.setProgress( 100 );
  }

  const CapitalizeFirstLetter = ( string ) => {
    return string.charAt( 0 ).toUpperCase() + string.slice( 1 );
  }

  useEffect(()=>{
    updateNews();
    document.title = `NEWS ADDA - ${ CapitalizeFirstLetter( props.category )}`;
     // eslint-disable-next-line
  } , [])

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage( page + 1 );
    setLoading( true );
    let data = await fetch( url );
    let parsedData = await data.json();
    // console.log( parsedData );

    setArticles( articles.concat(parsedData.articles))
    setTotalResults( parsedData.totalResults )
    setLoading( false )
    props.setProgress( 100 );

  };

  return (
    <div className='container my-3'>
      <h1 className='text-center' style={{marginTop:90}}>NewsAdda - Top {CapitalizeFirstLetter( props.category )} Headlines</h1>
      {/* {loading && <Spinner/>} */ }

      <InfiniteScroll
        dataLength={ articles.length }
        next={ fetchMoreData }
        hasMore={ articles.length < totalResults }
        loader={ loading && <Spinner /> }
      >
        <div className="row">
          { articles.map( ( element ) => {
            return <div className='col-md-4' key={ element.url }>
              <NewsItem title={ element.title ? element.title : "" } description={ element.description ? element.description : "" } imageUrl={ element.urlToImage } newsUrl={ element.url } author={ !element.author ? "Unknown" : element.author } date={ element.publishedAt } source={ element.source.name } />
            </div>
          } ) }
        </div>
      </InfiniteScroll>
    </div>
  )

}

News.defaultProps = {
  country: "in",
  pageSize: 15,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News;