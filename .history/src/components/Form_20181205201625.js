import React, {Component} from 'react';


class Form extends Component {
    render() {
        const {note} = this.props;
        return(
            <div className="form-group">
                <form>
                    <input type="text" className="form-control"/>
                </form>
            </div>
        )
    }
}

export default Form;