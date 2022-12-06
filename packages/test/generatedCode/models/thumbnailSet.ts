import {Entity, Thumbnail} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ThumbnailSet extends Entity, Partial<Parsable> {
    /** A 1920x1920 scaled thumbnail. */
    large?: Thumbnail;
    /** A 176x176 scaled thumbnail. */
    medium?: Thumbnail;
    /** A 48x48 cropped thumbnail. */
    small?: Thumbnail;
    /** A custom thumbnail image or the original image used to generate other thumbnails. */
    source?: Thumbnail;
}
