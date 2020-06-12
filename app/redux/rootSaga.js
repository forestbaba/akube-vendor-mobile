import { all } from 'redux-saga/effects';
// import { userAuthSaga } from './Authentication';
// import { userPropSaga } from './User';
import { authSaga } from './auth';

export default function* rootSaga() {
    yield all([
        // userAuthSaga(),
        // userPropSaga(),
        authSaga()
    ]);
}