import {BaseCollectionPaginationCountResponse, List} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ListCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: List[];
}
