import db, { auth, storage } from '../utils/fireBaseConfig';

import AuthStore from './AuthStore';

const authStore = new AuthStore(db, auth);


export default {
    authStore,
};