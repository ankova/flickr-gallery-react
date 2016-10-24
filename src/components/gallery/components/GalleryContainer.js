import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loadImageData} from '../actions';
import Gallery from './Gallery';

export class GalleryContainer extends Component {
    constructor(props) {
        super(props);

        const {url, galleryKey, dispatch} = props;
        dispatch(loadImageData({galleryKey, url}));
    }

    render() {
        const {galleries, galleryKey} = this.props;
        const galleryData = galleries[galleryKey];

        return (
        galleryData
            && <Gallery galleryData={galleryData.data} />
            || <div>Loading...</div>
        )
    };
}

const mapStateToProps = (state) => ({galleries: state.galleries});

export default connect(mapStateToProps)(GalleryContainer);