import {BaseCollectionPaginationCountResponse, Place} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlaceCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Place[];
}
