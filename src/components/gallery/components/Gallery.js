import React, { Component } from 'react';
import ImageView from './ImageView';
import ShareView from './ShareView';
import '../styles/main.scss';


export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedIndex: 0, range: 15, numberOfPages: 1, index: 0, searchInput: '',
        items: props.galleryData.items};
    }

    setSearchTerm(searchTerm){
        this.setState({searchTerm});
        /* Make the search instant. Disable it if want to set the search on the search button click*/
        setTimeout(() => {
            this.searchContent()
        }, 10);
    };

    /*Sets the index of the big image to be the first one of the selected page*/
    setIndex(i){
        const {range} = this.state;
        this.setState({index: i, selectedIndex: range * i});
    };

    searchContent(){
        const {searchTerm} = this.state;
        const {items} = this.props.galleryData;
        const resultItems = items.filter(d => d.tags.toLowerCase().indexOf(searchTerm) > -1 );
        this.setState({selectedIndex: 0, items: resultItems, index: 0});
    };

    render() {
        let {selectedIndex, range, numberOfPages, index, items} = this.state;
        let pages = [];

        numberOfPages = (items && items.length > 0 ) ? Math.ceil(items.length / range) : 1;

        for(let i = 1; i <= numberOfPages; i++) {
            pages = [...pages, i];
        }


        return (
            !items && <div>...Loading</div> ||
            <div className="flickr-gallery">
                <h1>Photos</h1>
                <div className="search-wrap">
                    <input type="search" className="search-input" placeholder="search by tag" onChange={(e) => this.setSearchTerm(e.target.value)} />
                    <button onClick={::this.searchContent}>
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                </div>
                {items.length === 0
                && <p className="no-results">Searching returned no results.</p>
                || <div className="big-image-container">
                    <div className="image-wrapper">
                        <button onClick={() => {
                        this.setState({selectedIndex: selectedIndex > 0 ? selectedIndex-1 : items.length -1});
                        if(selectedIndex - 1 < range && index !== 0) {
                            this.setIndex(index -1);
                        }
                    }} disabled={selectedIndex === 0}>Prev</button>
                        <img src={items[selectedIndex].media.m}/>
                        <button onClick={() => {
                        this.setState({selectedIndex: selectedIndex + 1});
                        if(selectedIndex + 2 > (range * (index + 1))) {
                            this.setIndex(index + 1);
                        }
                    }} disabled={selectedIndex + 1 === items.length}>Next</button>
                    </div>
                    <p className="big-image-description">Photographer credit: {items[selectedIndex].author}</p>
                    <ShareView />
                </div>}
                <div className="gallery">
                    <ul className="display-thumbs">
                        {items.slice(range*index, ((range*index) + range)).map((i, j) => (
                            <li key={j} onClick={() => {this.setState({selectedIndex: (range*index) + j})}}>
                                <ImageView meta={i}/>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="page-navigator">
                    <ul>
                        {pages.map((p, i) => <li key={i}><a href="#" style={{color: index === i ? 'orange' : 'white'}} onClick={(e) => {this.setIndex(i); e.preventDefault();} }>{i+1}</a></li> )}
                    </ul>
                </div>
            </div>
            )
    };
}