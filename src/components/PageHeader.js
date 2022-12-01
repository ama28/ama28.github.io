import { Component } from 'react';
import '../App.css';

class PageHeader extends Component {
    render() {
        return (
            <div className='introContainer'>
                <div className={`introBar ${this.props.styledDescription == null ? 'v2' : ''}`}></div>
                <div className={`introDescription ${this.props.styledDescription != null ? '' : 'small'}`}>
                {this.props.title != null && <h3>{this.props.title}</h3>}
                {this.props.styledDescription != null ? this.props.styledDescription : this.props.normalDescription}
                </div>
            </div>
        )
    }
}

export default PageHeader