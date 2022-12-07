import {Entity, Thumbnail} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ThumbnailSet extends Entity, Partial<Parsable> {
    /** The large property */
    large?: Thumbnail;
    /** The medium property */
    medium?: Thumbnail;
    /** The small property */
    small?: Thumbnail;
    /** The source property */
    source?: Thumbnail;
}
