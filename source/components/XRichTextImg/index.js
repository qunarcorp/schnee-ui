/* eslint-disable no-console */
import React from '@react';
import '../XRichText/index.scss';

class XRichTextImg extends React.Component {
    render() {
        return (
            <image
                class={this.props.item.attrs.class + ' octoParse-' + this.props.item.name}
                src={this.props.item.attrs.src}
                mode="widthFix"
                style={this.props.item.attrs.style}
            />
        );
    }
}

export default XRichTextImg;
