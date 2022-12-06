import {BaseCollectionPaginationCountResponse, Reminder} from '../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ReminderViewWithStartDateTimeWithEndDateTimeResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: Reminder[];
}
