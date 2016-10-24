import React from 'react';
import GalleryContainer from './gallery/components/GalleryContainer';

const Main = ({params}) => (
    <div>
        <GalleryContainer galleryKey="gallery1" url="http://api.flickr.com/services/feeds/photos_public.gne" />
    </div>
);

export default Main;