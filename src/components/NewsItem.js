import React, { Component } from 'react';


export class NewsItem extends Component {

    render() {
        let { title, desc, imageUrl, newsUrl, author, date} = this.props;
        return (

            <div className="my-3">
                <div className="card">
                    
                    <img src={imageUrl ? imageUrl : "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <p className="card-text"><small className="text-muted">by <b>{!author ? "Unknown" :author}</b> on <b>{new Date(date).toGMTString()}</b></small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem;
