import {BaseCollectionPaginationCountResponse, MediaStream} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MediaStreamCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MediaStream[];
}
