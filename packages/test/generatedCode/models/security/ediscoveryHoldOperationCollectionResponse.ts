import {BaseCollectionPaginationCountResponse} from '../';
import {EdiscoveryHoldOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryHoldOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EdiscoveryHoldOperation[];
}
