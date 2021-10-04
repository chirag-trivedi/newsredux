import React from "react";
import {connect} from 'react-redux'
import { latestNews } from "../actions";
import { bindActionCreators } from "redux";

import LatestNews from "../LatestNews";

class Home extends React.Component {

    componentDidMount() {
        this.props.latestNews();
    }

    render() {
        return(
            <div>
                <LatestNews latestData={this.props.articles.latest}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        articles: state.articles
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);