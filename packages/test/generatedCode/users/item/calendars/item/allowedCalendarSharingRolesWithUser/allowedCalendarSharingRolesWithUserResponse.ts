import {BaseCollectionPaginationCountResponse} from '../../../../../models/';
import {CalendarRoleType} from '../../../../../models/calendarRoleType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AllowedCalendarSharingRolesWithUserResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: CalendarRoleType[];
}
