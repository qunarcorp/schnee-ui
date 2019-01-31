import React from '@react';
import XRichText from '@components/XRichText/index';
import './index.scss';

const nodes = `<div><img src="https://source.qunarzz.com/common/hf/logo.png"/><h1 style="color:green;">h1文本</h1><h2>h2文本</h2><h3>h3文本</h3><h4>h4文本</h4><h5>h5文本</h5><h6>h6文本</h6><i>标签:i</i><a href="https://www.qunar.com">标签:a</a><div><code>let a=1;console.log(a)</code><table class="table"><thead><tr><th>thead>tr>th</th><th>thead>tr>th2222</th></tr></thead><tbody><tr><td>tbody>tr>td</td><td>tbody>tr>td22222</td></tr></tbody><tfoot><tr><td>tfoot>tr>td</td><td>tfoot>tr>td22222</td></tr></tfoot></table></div><div>多层嵌套<dl><dt>dl>dt</dt><dd>dl>dd1</dd><dd>dl>dd2</dd><dd>dl>dd3</dd></dl><ul><li>ul>li1</li><li>ul>li2</li><li>ul>li3</li><li><em>ul>li>标签:em</em></li><li><b>ul>li>标签:b</b><fieldset><legend>ul>li>fieldset>legend</legend>ul>li>fieldset</fieldset></li></ul><ol><li>ol>li1</li><li>ol>li2</li><li>ol>li3</li><li><strong>ol>li>strong</strong></li><li><sub>sub</sub><span>span</span><sup>sup</sup></li><li><blockquote>ol>li>blockquote</blockquote></li></ol></div>`;

class P extends React.Component {
    render() {
        return (
            <div className="anu-col demo-page">
                {/* <XRichText nodes={'<h1>h1文本</h1><h2>h2文本</h2><h3>h3文本</h3><h4>h4文本</h4><h5>h5文本</h5><h6>h6文本</h6>'}></XRichText> */}
                <XRichText nodes={nodes}></XRichText>
            </div>
        );
    }
}
export default P;