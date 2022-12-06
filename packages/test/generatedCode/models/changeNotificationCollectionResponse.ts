import {BaseCollectionPaginationCountResponse, ChangeNotification} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChangeNotificationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ChangeNotification[];
}
