import {BaseCollectionPaginationCountResponse, NetworkConnection} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface NetworkConnectionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: NetworkConnection[];
}
