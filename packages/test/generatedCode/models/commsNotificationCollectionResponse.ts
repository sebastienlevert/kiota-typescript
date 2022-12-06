import {BaseCollectionPaginationCountResponse, CommsNotification} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CommsNotificationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: CommsNotification[];
}
