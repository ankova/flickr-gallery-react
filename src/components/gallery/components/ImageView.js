import React, { Component } from 'react';

const ImageView = (props) => {
     const {media: {m}} = props.meta;

        return (
            <img src={m} />
        )
};

export default ImageView;