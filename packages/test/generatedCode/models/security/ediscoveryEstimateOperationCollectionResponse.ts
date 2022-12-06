import {BaseCollectionPaginationCountResponse} from '../';
import {EdiscoveryEstimateOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryEstimateOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EdiscoveryEstimateOperation[];
}
