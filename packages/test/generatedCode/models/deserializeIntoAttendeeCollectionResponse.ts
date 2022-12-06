import {deserializeIntoAttendee} from './deserializeIntoAttendee';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AttendeeCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAttendeeCollectionResponse(attendeeCollectionResponse: AttendeeCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(attendeeCollectionResponse),
        "value": n => { attendeeCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAttendee) as any ; },
    }
}
