//화면에서 데이터를 요청해야될때 action을 먼저 찌른다음
//여기서 ajax를 호출해서 데이터를 가지고 온다


//action creators



//User 조회
export function fetchUser() {
    console.log('fetchUser action');
    return {
        type: 'FETCH_USER',
        payload: 'aaaaaaa'
    }
}
//User 저장
export function saveUser() {
    return {
        type: 'SAVE_USER',
        payload: {
            method: ''
        }
    }

}





