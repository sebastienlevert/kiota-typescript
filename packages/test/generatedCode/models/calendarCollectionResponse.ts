import {BaseCollectionPaginationCountResponse, Calendar} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CalendarCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Calendar[];
}
