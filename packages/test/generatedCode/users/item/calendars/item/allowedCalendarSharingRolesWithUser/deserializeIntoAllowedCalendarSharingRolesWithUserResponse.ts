import {CalendarRoleType} from '../../../../../models/calendarRoleType';
import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {AllowedCalendarSharingRolesWithUserResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAllowedCalendarSharingRolesWithUserResponse(allowedCalendarSharingRolesWithUserResponse: AllowedCalendarSharingRolesWithUserResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(allowedCalendarSharingRolesWithUserResponse),
        "value": n => { allowedCalendarSharingRolesWithUserResponse.value = n.getEnumValues<CalendarRoleType>(CalendarRoleType) as any ; },
    }
}
