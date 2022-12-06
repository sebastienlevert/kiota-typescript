import {BaseCollectionPaginationCountResponse, CalendarSharingMessageAction} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CalendarSharingMessageActionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: CalendarSharingMessageAction[];
}
