import { Url } from './types';
import { ImagesConfig } from './images.config';

export interface BrandConfig {
    name: string;
    image: {
        logo: string;
    };
    images: ImagesConfig;
}
