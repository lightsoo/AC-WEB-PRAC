import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/user';

//부모   - 자식 1
//      - 자식 2 의 데이터 흐름에서 자식 2의 데이터를 부모를 통해 자식에 보낼수있다
//상위 -> 하위에서 데이터를 넘길때 props을 자주 사용한다



class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // ajax call
        this.props.fetchUser();
    }

    componentWillReceiveProps () {

    }

    render() {
        console.log('About : ', this.props);
        return (
            <div className="about">
                    <p>
                        {this.props.user}
                    </p>
            </div>
        );
    }
}




const mapStateProps = state => {
    return {
       user: state.user
    }
};
const mapDispatchProps = dispatch => {
    return {
        fetchUser: () => dispatch(fetchUser())
    }
};
 // 리듀서가 받기위해 호출되는것이 dispatch


//connect : store에 있는 값을 현재 클래스(화면)의 props로 전달
// 하나의 액션을 현재 클래스의 props로 전달

export default connect(
    mapStateProps,
    mapDispatchProps
)(About);
