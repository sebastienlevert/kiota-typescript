import {BookingsAvailabilityStatus} from './bookingsAvailabilityStatus';
import {AvailabilityItem} from './index';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAvailabilityItem(writer: SerializationWriter, availabilityItem: AvailabilityItem | undefined = {}) : void {
            writer.writeObjectValueFromMethod("endDateTime", availabilityItem.endDateTime as any, serializeDateTimeTimeZone);
            writer.writeStringValue("@odata.type", availabilityItem.odataType);
            writer.writeStringValue("serviceId", availabilityItem.serviceId);
            writer.writeObjectValueFromMethod("startDateTime", availabilityItem.startDateTime as any, serializeDateTimeTimeZone);
            writer.writeEnumValue<BookingsAvailabilityStatus>("status", availabilityItem.status);
}
