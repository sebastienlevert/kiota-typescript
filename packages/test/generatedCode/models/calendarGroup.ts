import {Calendar, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CalendarGroup extends Entity, Partial<Parsable> {
    /** The calendars in the calendar group. Navigation property. Read-only. Nullable. */
    calendars?: Calendar[];
    /** Identifies the version of the calendar group. Every time the calendar group is changed, ChangeKey changes as well. This allows Exchange to apply changes to the correct version of the object. Read-only. */
    changeKey?: string;
    /** The class identifier. Read-only. */
    classId?: string;
    /** The group name. */
    name?: string;
}
