import React from '@react';
import './index.scss';

class XDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    stopPropagation(e) {
        e.stopPropagation();
    }


    render() {

        return (
            <div class="fixed-container" hidden={!this.props.show}>
                <stack class="modal">
                    <div class="modal-bg" onClick={this.props.onHiden}></div>
                    <div class="content-container" onTap={this.stopPropagation}>
                        {this.props.children}
                    </div>
                </stack>

            </div>
        );
        
    }

}

XDialog.defaultProps = {
   
    onHiden: function() {}
};

export default XDialog;