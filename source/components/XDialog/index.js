import React from '@react';
import './index.scss';

class XDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

    }



    render() {

        return (
            <div class="fixed-container" style={{display: this.props.show ? 'flex' : 'none'}}>
                <div class="modal">
                    <div class="content-container" onTap={this.props.onHiden}>
                        {this.props.children}
                    </div>
                </div>

            </div>
        );
        
    }

}

XDialog.defaultProps = {
   
    onHiden: function() {}
};

export default XDialog;