import {AttendeeAvailabilityCollectionResponse} from './index';
import {serializeAttendeeAvailability} from './serializeAttendeeAvailability';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttendeeAvailabilityCollectionResponse(writer: SerializationWriter, attendeeAvailabilityCollectionResponse: AttendeeAvailabilityCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, attendeeAvailabilityCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", attendeeAvailabilityCollectionResponse.value as any, serializeAttendeeAvailability);
}
