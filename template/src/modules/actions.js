// import * as application from './application-old/actions';
import { applicationOperations } from './application-featurefirst';
// import { applicationSlice } from './application-rtk';

// toggle me for application-old
// export default {
//     ...application,
// };

// toggle me for application-featurefirst
export default {
    ...applicationOperations,
};

// toggle me for application-rtk
// export default {
//     ...applicationSlice.actions
// }