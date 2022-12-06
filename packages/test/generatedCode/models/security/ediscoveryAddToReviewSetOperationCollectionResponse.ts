import {BaseCollectionPaginationCountResponse} from '../';
import {EdiscoveryAddToReviewSetOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryAddToReviewSetOperationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EdiscoveryAddToReviewSetOperation[];
}
