import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme';
import  Gallery from '../../components/Gallery';

function setup() {
    const props = {
        galleryData: {
            items: [{
                "title": "May_23.jpg",
                "link": "http://www.flickr.com/photos/rlizzimore/29581989813/",
                "media": {"m":"test.jpg"},
                "date_taken": "2016-04-30T18:46:48-08:00",
                "description": "",
                "published": "2016-10-09T12:59:05Z",
                "author": "nobody@flickr.com (r_lizzimore)",
                "author_id": "41086995@N00",
                "tags": "scenery tarn lakedistrict buttermere outdoors mountains ennerdalewater haystacks landscape mountain"
            },
            {
                "title": "Test.jpg",
                "link": "http://www.flickr.com/photos/rlizzimore/29581989813/",
                "media": {"m":"http://farm6.staticflickr.com/5053/29581989813_98b8581ac3_m.jpg"},
                "date_taken": "2016-04-30T18:46:48-08:00",
                "description": "",
                "published": "2016-10-09T12:59:05Z",
                "author": "somebody",
                "author_id": "41086995@N00",
                "tags": "tarn mountain"
            }]
        }
    };

    const galleryWrapper = shallow(<Gallery {...props} />);

    return {
        props,
        galleryWrapper
    }
}

describe('Gallery component', () => {
    it('renders content', () => {
        const {galleryWrapper, props} = setup();
        const itemsLength = props.galleryData.items.length;

        expect(galleryWrapper.find('.display-thumbs').children().length).toBe(itemsLength);
        expect(galleryWrapper.find('.flickr-gallery').length).toBe(1);
        expect(galleryWrapper.find('.big-image-container').length).toBe(1);
        expect(galleryWrapper.find('.search-wrap').length).toBe(1);
        expect(galleryWrapper.find('.page-navigator').length).toBe(1);
    });

    it('checks if the Next button changes the selectedIndex correctly', () => {
        const {galleryWrapper} = setup();

        expect(galleryWrapper.state().selectedIndex).toEqual(0);
        galleryWrapper.find('.image-wrapper button').at(1).props().onClick();
        expect(galleryWrapper.state().selectedIndex).toEqual(1);
    });
});