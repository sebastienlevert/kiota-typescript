import {AccessReviewHistoryInstance, BaseCollectionPaginationCountResponse} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewHistoryInstanceCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: AccessReviewHistoryInstance[];
}
