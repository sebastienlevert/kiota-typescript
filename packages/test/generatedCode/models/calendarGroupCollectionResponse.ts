import {BaseCollectionPaginationCountResponse, CalendarGroup} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CalendarGroupCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: CalendarGroup[];
}
