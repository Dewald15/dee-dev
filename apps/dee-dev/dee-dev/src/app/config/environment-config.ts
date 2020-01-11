import { WwwEnvironment } from '@dee-dev/components/ui/src';

import { environment } from '../../environments/environment';

export const wwwEnvironment: WwwEnvironment = {
    production: environment.production,
    appRoot: environment.appRoot,
    whiteList: environment.whiteList
};
