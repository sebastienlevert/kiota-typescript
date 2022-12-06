import {AccessReviewInstanceDecisionItem, BaseCollectionPaginationCountResponse} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewInstanceDecisionItemCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: AccessReviewInstanceDecisionItem[];
}
