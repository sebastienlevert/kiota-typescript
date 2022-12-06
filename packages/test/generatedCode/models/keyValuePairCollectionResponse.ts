import {BaseCollectionPaginationCountResponse, KeyValuePair} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface KeyValuePairCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: KeyValuePair[];
}
