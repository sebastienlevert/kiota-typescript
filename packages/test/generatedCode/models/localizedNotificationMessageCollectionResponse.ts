import {BaseCollectionPaginationCountResponse, LocalizedNotificationMessage} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LocalizedNotificationMessageCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: LocalizedNotificationMessage[];
}
