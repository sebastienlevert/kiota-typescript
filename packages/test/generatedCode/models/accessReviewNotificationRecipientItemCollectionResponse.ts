import {AccessReviewNotificationRecipientItem, BaseCollectionPaginationCountResponse} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewNotificationRecipientItemCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: AccessReviewNotificationRecipientItem[];
}
