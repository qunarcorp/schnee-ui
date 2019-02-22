/* eslint-disable no-console */
import React from '@react';
import './index.scss';
import parseHtmlFromStr from '../../common/richtext-utils/parseHtmlFromStr';
import XRichTextTemp01 from '../XRichTextTemp01';

/**
 * item
 * {
 *     name: 'div',
 *     attrs: {
 *         class: 'div-class',
 *         style: 'color: blue;'
 *     },
 *     children: [item]
 * }
 */
class XRichText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: [],
        };
    }

    componentWillMount() {
        const { nodes: propNodes } = this.props;
        const nodes = parseHtmlFromStr(propNodes);
        console.log(
            '%c [componentWillMount]',
            'font-size:16pt;color:red',
            '\nresult:::',
            nodes
        );
        this.setState({ nodes });
    }

    // renderNode(item) {}

    render() {
        return (
            <div class="octoParse">
                {this.state.nodes.map(function(item) {
                    return <XRichTextTemp01 item={item} />;
                }, this)}
            </div>
        );
    }
}

export default XRichText;
