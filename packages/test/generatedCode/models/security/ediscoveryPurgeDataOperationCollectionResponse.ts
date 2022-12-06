import {BaseCollectionPaginationCountResponse} from '../';
import {EdiscoveryPurgeDataOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryPurgeDataOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EdiscoveryPurgeDataOperation[];
}
