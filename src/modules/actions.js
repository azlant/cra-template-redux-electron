// import * as application from './application-old/actions';
// import { applicationOperations } from './application-featurefirst';
import { applicationSlice } from './application-rtk';

// export default {
//     ...application,
// };

// export default {
//     ...applicationOperations,
// };

export default {
    ...applicationSlice.actions
}