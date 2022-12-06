import {BaseCollectionPaginationCountResponse} from '../';
import {EdiscoveryReviewTag} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryReviewTagCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EdiscoveryReviewTag[];
}
