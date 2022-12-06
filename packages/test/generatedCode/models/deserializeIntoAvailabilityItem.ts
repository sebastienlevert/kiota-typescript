import {BookingsAvailabilityStatus} from './bookingsAvailabilityStatus';
import {deserializeIntoDateTimeTimeZone} from './deserializeIntoDateTimeTimeZone';
import {AvailabilityItem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAvailabilityItem(availabilityItem: AvailabilityItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "endDateTime": n => { availabilityItem.endDateTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "@odata.type": n => { availabilityItem.odataType = n.getStringValue() as any ; },
        "serviceId": n => { availabilityItem.serviceId = n.getStringValue() as any ; },
        "startDateTime": n => { availabilityItem.startDateTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "status": n => { availabilityItem.status = n.getEnumValue<BookingsAvailabilityStatus>(BookingsAvailabilityStatus) as any ; },
    }
}
