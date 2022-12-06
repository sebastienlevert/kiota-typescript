import {BaseCollectionPaginationCountResponse, Location} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LocationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Location[];
}
