import {BaseCollectionPaginationCountResponse, CalendarSharingMessage} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CalendarSharingMessageCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: CalendarSharingMessage[];
}
