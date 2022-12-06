import {BaseCollectionPaginationCountResponse} from '../';
import {EdiscoveryReviewSet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryReviewSetCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EdiscoveryReviewSet[];
}
