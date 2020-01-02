// import application from './application-old/reducers';
import application from './application-featurefirst'
import { applicationSlice } from './application-rtk';

// export default {
//     application,
// };

export default {
    application: applicationSlice.reducer,
};