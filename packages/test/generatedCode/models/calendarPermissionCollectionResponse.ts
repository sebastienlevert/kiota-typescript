import {BaseCollectionPaginationCountResponse, CalendarPermission} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CalendarPermissionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: CalendarPermission[];
}
