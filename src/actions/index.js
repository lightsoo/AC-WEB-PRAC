//화면에서 데이터를 요청해야될때 action을 먼저 찌른다음
//여기서 ajax를 호출해서 데이터를 가지고 온다
//이 이름의 reducer를 호출하면 reducer안에 데이터가 저장된다

//action types...
/*user*/
export const FETCH_USER = 'FETCH_USER';
export const SAVE_USER = 'SAVE_USER';
export const SEARCH_NOTICE = 'SEARCH_NOTICE';
export const SEARCH_NOTICE_BY_TEXT = 'SEARCH_NOTICE_BY_TEXT';


//action creators

//User 조회
export function fetchUser() {
    return {
        type: 'FETCH_USER',
        payload: 'aaaaaaa'
    };
}
//User 저장
export function saveUser() {
    return {
        type: 'SAVE_USER',
        payload: {
            method: 'POST'

        }
    }
}

export function searchNotice() {
    return {
        type: 'SEARCH_NOTICE',
        payload: {
            dataSource: [
                {
                    key: '1',
                    name: 'Mike',
                    age: 32,
                    address: '10 Downing Street'
                }, {
                    key: '2',
                    name: 'John',
                    age: 42,
                    address: '10 Downing Street'
                }, {
                    key: '237',
                    name: 'John',
                    age: 42,
                    address: '10 Downing Street'
                }, {
                    key: '203',
                    name: 'John',
                    age: 42,
                    address: '10 Downing Street'
                }, {
                    key: '236',
                    name: 'John',
                    age: 42,
                    address: '10 Downing Street'
                }, {
                    key: '216',
                    name: 'John',
                    age: 42,
                    address: '10 Downing Street'
                }, {
                    key: '2231',
                    name: 'John',
                    age: 42,
                    address: '10 Downing Street'
                }, {
                    key: '2121',
                    name: 'Lightsoo',
                    age: 32,
                    address: '10 Downing Street'
                }, {
                    key: '2691',
                    name: 'John',
                    age: 32,
                    address: '10 Downing Street'
                }, {
                    key: '2681',
                    name: 'John',
                    age: 42,
                    address: '10 Downing Street'
                }, {
                    key: '56',
                    name: 'John',
                    age: 42,
                    address: '10 Downing Street'
                }, {
                    key: '21791',
                    name: 'John',
                    age: 42,
                    address: '10 Downing Street'
                }, {
                    key: '27591',
                    name: 'John',
                    age: 42,
                    address: '10 Downing Street'
                }, {
                    key: '217191',
                    name: 'John',
                    age: 42,
                    address: '10 Downing Street'
                }, {
                    key: '27951',
                    name: 'J5ohn',
                    age: 42,
                    address: '10 Downing Street'
                }, {
                    key: '2791',
                    name: 'Joh51n',
                    age: 42,
                    address: '10 Downing Street'
                }, {
                    key: '27912',
                    name: 'John',
                    age: 42,
                    address: '10 Downing Street'
                }],
            columns: [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                }, {
                    title: 'Age',
                    dataIndex: 'age',
                    key: 'age',
                }, {
                    title: 'Address',
                    dataIndex: 'address',
                    key: 'address',
                }]
        }
    }
}

export function searchNoticeByText(cond) {
    console.log('searchNoticeByText cond: ', cond);
    let dataSource;
    if (cond) {
        dataSource = [
            {
                key: '217191',
                name: 'John',
                age: 42,
                address: '10 Downing Street'
            }, {
                key: '27951',
                name: 'J5ohn',
                age: 42,
                address: '10 Downing Street'
            }, {
                key: '2795441',
                name: 'J5oh22n',
                age: 4552,
                address: '13230 Downing Street'
            }];
    } else {
        dataSource = [{
                key: '217191',
                name: 'John',
                age: 42,
                address: '10 Downing Street'
            }];
    }


    return {
        type: 'SEARCH_NOTICE_BY_TEXT',
        payload: {
            dataSource,
            columns: [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                }, {
                    title: 'Age',
                    dataIndex: 'age',
                    key: 'age',
                }, {
                    title: 'Address',
                    dataIndex: 'address',
                    key: 'address',
                }]
        }
    }
}

