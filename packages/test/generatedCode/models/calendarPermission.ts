import {CalendarRoleType} from './calendarRoleType';
import {EmailAddress, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CalendarPermission extends Entity, Partial<Parsable> {
    /** List of allowed sharing or delegating permission levels for the calendar. Possible values are: none, freeBusyRead, limitedRead, read, write, delegateWithoutPrivateEventAccess, delegateWithPrivateEventAccess, custom. */
    allowedRoles?: CalendarRoleType[];
    /** Represents a sharee or delegate who has access to the calendar. For the 'My Organization' sharee, the address property is null. Read-only. */
    emailAddress?: EmailAddress;
    /** True if the user in context (sharee or delegate) is inside the same organization as the calendar owner. */
    isInsideOrganization?: boolean;
    /** True if the user can be removed from the list of sharees or delegates for the specified calendar, false otherwise. The 'My organization' user determines the permissions other people within your organization have to the given calendar. You cannot remove 'My organization' as a sharee to a calendar. */
    isRemovable?: boolean;
    /** Current permission level of the calendar sharee or delegate. */
    role?: CalendarRoleType;
}
