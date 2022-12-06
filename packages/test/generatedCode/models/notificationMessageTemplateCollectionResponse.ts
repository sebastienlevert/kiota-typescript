import {BaseCollectionPaginationCountResponse, NotificationMessageTemplate} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface NotificationMessageTemplateCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: NotificationMessageTemplate[];
}
