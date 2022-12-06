import {BaseCollectionPaginationCountResponse} from '../';
import {EdiscoveryReviewSetQuery} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryReviewSetQueryCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EdiscoveryReviewSetQuery[];
}
