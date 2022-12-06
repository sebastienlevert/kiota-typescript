import {AttendeeCollectionResponse} from './index';
import {serializeAttendee} from './serializeAttendee';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAttendeeCollectionResponse(writer: SerializationWriter, attendeeCollectionResponse: AttendeeCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, attendeeCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", attendeeCollectionResponse.value as any, serializeAttendee);
}
