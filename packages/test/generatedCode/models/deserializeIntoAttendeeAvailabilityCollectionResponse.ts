import {deserializeIntoAttendeeAvailability} from './deserializeIntoAttendeeAvailability';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AttendeeAvailabilityCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttendeeAvailabilityCollectionResponse(attendeeAvailabilityCollectionResponse: AttendeeAvailabilityCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(attendeeAvailabilityCollectionResponse),
        "value": n => { attendeeAvailabilityCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttendeeAvailability) as any ; },
    }
}
