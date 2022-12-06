import {CalendarRoleType} from '../../../../models/calendarRoleType';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../models/serializeBaseCollectionPaginationCountResponse';
import {AllowedCalendarSharingRolesWithUserResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAllowedCalendarSharingRolesWithUserResponse(writer: SerializationWriter, allowedCalendarSharingRolesWithUserResponse: AllowedCalendarSharingRolesWithUserResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, allowedCalendarSharingRolesWithUserResponse)
            writer.writeEnumValue<CalendarRoleType>("value", allowedCalendarSharingRolesWithUserResponse.value);
}
