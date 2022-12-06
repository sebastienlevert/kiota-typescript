import {BaseCollectionPaginationCountResponse, IosNotificationSettings} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosNotificationSettingsCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: IosNotificationSettings[];
}
