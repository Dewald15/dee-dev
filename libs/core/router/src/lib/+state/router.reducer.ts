import { Params } from '@angular/router';

export interface RouterStateData {
    url: string;
    segments: string[];
    params: Params;
    queryParams: Params;
    data: any;
}
