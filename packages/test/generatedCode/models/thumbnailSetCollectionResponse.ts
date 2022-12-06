import {BaseCollectionPaginationCountResponse, ThumbnailSet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ThumbnailSetCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ThumbnailSet[];
}
