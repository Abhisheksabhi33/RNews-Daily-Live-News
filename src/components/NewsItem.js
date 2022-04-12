
import React, { Component } from 'react'

export default class NewsItem extends Component {


  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger " style={{ left: '90%', zIndex: '1' }}> {source}</span>
          <img src={!imageUrl ? "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>

            <p className="card-text">{description}</p>
            <p className="card-text"><small class="text-muted">By {!author ? "Unknown" : author} On {new Date(date).toGMTString()} </small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn  btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
