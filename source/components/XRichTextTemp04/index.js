/* eslint-disable no-console */
import React from '@react';
import '../XRichText/index.scss';
import XRichTextImg from '../XRichTextImg/index';
import XRichTextTemp05 from '../XRichTextTemp05/index';

class XRichTextTemp04 extends React.Component {
    render() {
        return (
            <block>
                {this.props.item.name === 'hr' && <hr />}
                {this.props.item.name === 'a' && <a class={'octoParse-a ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </a>}
                {this.props.item.name === 'img' && ( <XRichTextImg item={this.props.item} /> )}
                {this.props.item.name === 'h1' && <h1 class={'octoParse-h1 ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} t="h1" />;
                    }, this)}
                </h1>}
                {this.props.item.name === 'h2' && <h2 class={'octoParse-h2 ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </h2>}
                {this.props.item.name === 'h3' && <h3 class={'octoParse-h3 ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </h3>}
                {this.props.item.name === 'h4' && <h4 class={'octoParse-h4 ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </h4>}
                {this.props.item.name === 'h5' && <h5 class={'octoParse-h5 ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </h5>}
                {this.props.item.name === 'h6' && <h6 class={'octoParse-h6 ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </h6>}
                {this.props.item.name === 'span' && <span class={'octoParse-inline ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </span>}
                {this.props.item.name === 'div' && <div>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </div>}
                {this.props.item.type === 'text' && ( <text class="aTextView octoParse-inline">{this.props.item.text}</text> )}
                {this.props.item.name === 'b' && <b class={'octoParse-b ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </b>}
                {this.props.item.name === 's' && <s class={'octoParse-s ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </s>}
                {this.props.item.name === 'code' && <code class={'octoParse-code ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </code>}
                {this.props.item.name === 'quote' && <quote class={'octoParse-quote ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </quote>}
                {this.props.item.name === 'cite' && <cite class={'octoParse-cite ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </cite>}
                {this.props.item.name === 'abbr' && <abbr class={'octoParse-abbr ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </abbr>}
                {this.props.item.name === 'blockquote' && <blockquote class={'octoParse-blockquote ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </blockquote>}
                {this.props.item.name === 'del' && <del class={'octoParse-del ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </del>}
                {this.props.item.name === 'em' && <em class={'octoParse-em ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </em>}
                {this.props.item.name === 'p' && <p class={'octoParse-p ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </p>}
                {this.props.item.name === 'q' && <q class={'octoParse-q ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </q>}
                {this.props.item.name === 'strong' && <strong class={'octoParse-strong ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </strong>}
                {this.props.item.name === 'sub' && <sub class={'octoParse-sub octoParse-inline ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </sub>}
                {this.props.item.name === 'sup' && <sup class={'octoParse-sup octoParse-inline ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </sup>}
                {this.props.item.name === 'ul' && <ul class={'octoParse-ul ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </ul>}
                {this.props.item.name === 'li' && <li
                    class={'octoParse-li ' + this.props.item.attrs.class}
                    style={this.props.item.attrs.style}
                >
                    <view class={'octoParse-li-inner ' + this.props.item.attrs.class}>
                        <view class={'octoParse-li-text ' + this.props.item.attrs.class}>
                            <view class={'octoParse-li-circle ' + this.props.item.attrs.class}></view>
                        </view>
                        <view class={'octoParse-li-text ' + this.props.item.attrs.class}>
                            {this.props.item.children.map(function(citem){
                                return <XRichTextTemp05 item={citem} />;
                            }, this)}
                        </view>
                    </view>
                </li>}
                {this.props.item.name === 'ol' && <ol class={'octoParse-ol ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </ol>}
                {this.props.item.name === 'dl' && <dl class={'octoParse-dl ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </dl>}
                {this.props.item.name === 'dt' && <dt class={'octoParse-dt ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </dt>}
                {this.props.item.name === 'dd' && <dd class={'octoParse-dd ' + this.props.item.attrs.class} style={this.props.item.attrs.style}>
                    {this.props.item.children.map(function(citem){
                        return <XRichTextTemp05 item={citem} />;
                    }, this)}
                </dd>}
            </block>
        );
    }
}

export default XRichTextTemp04;
