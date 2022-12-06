import {BaseCollectionPaginationCountResponse} from '../../../../../../models/';
import {EdiscoveryReviewTag} from '../../../../../../models/security/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AsHierarchyResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EdiscoveryReviewTag[];
}
