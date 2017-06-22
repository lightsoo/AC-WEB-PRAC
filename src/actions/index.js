//화면에서 데이터를 요청해야될때 action을 먼저 찌른다음
//여기서 ajax를 호출해서 데이터를 가지고 온다

//이 이름의 reducer를 호출하면 reducer안에 데이터가 저장된다

//action types...
/*user*/
export const FETCH_USER = 'FETCH_USER';
export const SAVE_USER = 'SAVE_USER';

//action creators
let action ={};

//User 조회
export function fetchUser() {
    // console.log('fetchUser action');
    return action = {
        type: 'FETCH_USER',
        payload: 'aaaaaaa'
    }
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

