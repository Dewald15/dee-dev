import { mockRouter } from './lib/config';
import {
    Go,
    Back,
    Forward,
    OpenUrl,
    Download,
    state,
    url,
    segments,
    params,
    queryParams,
    data,
    pageTitle,
    RouterActionTypes
} from './lib/+state';
export { RouterStateData } from './lib/+state';

export { RouterModule } from './lib/router.module';
export const store = {
    RouterActionTypes,
    Go,
    Back,
    Forward,
    OpenUrl,
    Download,
    state,
    url,
    segments,
    params,
    queryParams,
    data,
    pageTitle,
    mockRouter
};
