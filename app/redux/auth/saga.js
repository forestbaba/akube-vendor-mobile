import { call, put, takeEvery, take } from 'redux-saga/effects';
import firebase from 'firebase'
import { channel } from 'redux-saga';
import actionTypes from '../types';
import { authentication } from '../../util/FirebaseInit'
import {
    initiateLogin,
    loginSuccess,
    loginFailure, alreadyLoggedIn, notAlreadyLoggedIn
} from './action'
import axios from 'axios'

const BASE_URL = 'http://localhost:2000/api/v1/product';
const BASE_URL2 = 'http://localhost:2000/api/v1/images';
const {
    INITIATE_LOGIN,
    INITIATE_LOGIN_STATUS
} = actionTypes;


function* login({ payload }) {
    console.log('Login payload: ', payload)
    const localuser = channel();
    try {
        yield call(async () => {

            authentication.signInWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    localuser.put(loginSuccess())
                })
                .catch(function (error) {

                });


        });
        while (true) {
            const action = yield take(localuser);
            yield put(action);
        }
    } catch (error) {
        yield put(loginFailure(error));
    }
}
function* checkUserLoginStatus() {
    const userStatus = channel();
    try {
        yield call(async () => {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {

                    console.log('Checking____________', user)
                    // User is signed in.
                } else {
                    // No user is signed in.
                    userStatus.put(notAlreadyLoggedIn())
                    console.log('Inside no user is logged in: ')
                }
            });

        });
        while (true) {
            const action = yield take(userStatus);
            yield put(action);
        }
    } catch (error) {
        console.log('Initiae error: ', error)
        yield put(notAlreadyLoggedIn(error));
    }
}


// function* addnewProduct({payload}) {
//     console.log('Take this action: ', payload);
//     const addProduct = channel();
//     try {
//         if (payload) {
//             yield axios.post(`${BASE_URL}/add`, {
//                 name: payload.name,
//                 description: payload.description,
//                 size: payload.size,
//                 price: payload.price,
//                 category: payload.category
//             })
//                 .then(data => {
//                     console.log('Document successfully written!');
//                     addProduct.put(addProductSuccesss(data));

//                 })
//         }
//         while (true) {
//             const action = yield take(addProduct);
//             yield put(action);
//         }
//     } catch (error) {
//         console.log('KKKKKKKKKKKKKKK: ', error);
//         yield put(addProductFailure(error));
//     }
// }

// function* uploadProductImage({payload}) {

//     console.log('Take this action: ', payload);
//     const uploadImage = channel();
//     try {

//         // const config = {
//         //     headers: {'content-type': 'multipart/form-data'}
//         // };

//         const config = {
//             onUploadProgress: function(progressEvent) {
//                 let percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
//                 console.log('+++++++++', percentCompleted)
//             }
//         };
//         if (payload) {
//             yield axios.post(`${BASE_URL}/uploadFile`, payload, config)
//                 .then(data => {
//                     console.log('Document successfully written! ', data);
//                     uploadImage.put(uploadImageSuccesss(data));

//                 })
//         }
//         while (true) {
//             const action = yield take(uploadImage);
//             yield put(action);
//         }
//     } catch (error) {
//         yield put(uploadImageFailure(error));
//     }
// }


// function* getAllNewinProducts() {
//     const newinProducts = channel();
//     const newArr = [];
//     try {
//         yield call(async () => {
//             // const allProducts = await axios.get("https://oddwyse.herokuapp.com/api/v1/game/all");
//             const allNewinProducts = await axios.get(`${BASE_URL}/getAllNewin`);
//             if (allNewinProducts.length !== 0) {
//                 //newArr=allNewinProducts.data
//                 allNewinProducts.data.map(its => {
//                     //  console.log('>>>', its)
//                     newArr.push(its)
//                 });
//                 newinProducts.put(fetchNewinProductSuccesss(newArr));
//                 //console.log('****', newArr)
//             }

//         });
//         while (true) {
//             const action = yield take(newinProducts);
//             yield put(action);
//         }
//     } catch (error) {
//         yield put(fetchNewinProductFailure(error));
//     }
// }

// function* getSingleProduct({payload}) {

//     const singleProduct = channel();
//     try {
//         yield call(async () => {
//             const singleProd = await axios.get(`${BASE_URL}/getSingleProduct/${payload}`);
//             if (singleProd.length !== 0) {
//                 singleProduct.put(getProductSuccesss(singleProd.data));
//                 //console.log('****', newArr)
//             }

//         });
//         while (true) {
//             const action = yield take(singleProduct);
//             yield put(action);
//         }
//     } catch (error) {
//         yield put(getProductFailure(error));
//     }
// }

// function* updateSingleProduct({payload}) {

//     console.log('===Prod: ', payload.id);

//     const updatedProduct = channel();
//     try {
//         yield call(async () => {
//             const singleProd = await axios.put(`${BASE_URL}/updateOne/${payload.id}`, {
//                 name: payload.name,
//                 price: payload.price,
//                 size: payload.size,
//                 category: payload.category,
//                 description: payload.description,
//                 image: payload.image
//             });
//             if (singleProd.length !== 0) {
//                 console.log('YYYYYY: ', singleProd);
//                 updatedProduct.put(updateProductSuccesss(singleProd));
//                 //console.log('****', newArr)
//             }

//         });
//         while (true) {
//             const action = yield take(updatedProduct);
//             yield put(action);
//         }
//     } catch (error) {
//         yield put(updateProductFailure(error));
//     }
// }

// function* getImagesOfProduct({payload}) {

//     const productImage = channel();
//     try {
//         yield call(async () => {
//             const getProdIma = await axios.get(`${BASE_URL2}/product/${payload}`);
//             if (getProdIma.length !== 0) {
//                 productImage.put(getProductImagesSuccesss(getProdIma.data));
//                 console.log('YYYYYY: ', getProdIma.data)

//                 //console.log('****', newArr)
//             }

//         });
//         while (true) {
//             const action = yield take(productImage);
//             yield put(action);
//         }
//     } catch (error) {
//         console.log('==========This images: ', error);
//         yield put(getProductImagesFailure(error));
//     }
// }

// function* getProductInCategories({payload}) {

//     const productCategory = channel();
//     try {
//         yield call(async () => {
//             const getProdcategory = await axios.get(`${BASE_URL}/getByCategory/${payload}`);
//             if (getProdcategory.length !== 0) {
//                 productCategory.put(getProductByCategorySuccesss(getProdcategory.data));
//                 //console.log('****', newArr)
//             }

//         });
//         while (true) {
//             const action = yield take(productCategory);
//             yield put(action);
//         }
//     } catch (error) {
//         yield put(getProductByCategoryFailure(error));
//     }
// }

// function* deleteProductImage({payload}) {

//     console.log('======Payload of the product',typeof payload);
//     console.log('======Payload of the product',payload.name);
//     console.log('======podutc id: ', payload.productId);
//     const deleteImage = channel();
//     try {
//         yield call(async () => {
//             const delProductimg = await axios.post(`${BASE_URL2}/deleteImage/${payload.imageId}`, {
//                 id: payload.productId,
//                 name: payload.name
//             }  );
//             if (delProductimg.length !== 0) {
//                 deleteImage.put(deleteProductImageSuccesss(delProductimg.data));
//                 //console.log('****', newArr)
//             }

//         });
//         while (true) {
//             const action = yield take(deleteImage);
//             yield put(action);
//         }
//     } catch (error) {
//         yield put(deleteProductImageFailure(error));
//     }
// }


export default function* merchantSaga() {

    yield takeEvery(INITIATE_LOGIN, login);
    yield takeEvery(INITIATE_LOGIN_STATUS, checkUserLoginStatus);
    // yield takeEvery(ADD_PRODUCTS, addnewProduct);
    // yield takeEvery(UPLOAD_IMAGE, uploadProductImage);
    // yield takeEvery(NEWIN_PRODUCTS, getAllNewinProducts);
    // yield takeEvery(GET_PRODUCT, getSingleProduct);
    // yield takeEvery(UPDATE_ONE, updateSingleProduct);
    // yield takeEvery(GET_PRODUCT_IMAGES, getImagesOfProduct);
    // yield takeEvery(GET_PRODUCT_BY_CATEGORY, getProductInCategories);
    // yield takeEvery(DELETE_IMAGE, deleteProductImage);

}