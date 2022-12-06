import {deserializeIntoAvailabilityItem} from './deserializeIntoAvailabilityItem';
import {StaffAvailabilityItem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStaffAvailabilityItem(staffAvailabilityItem: StaffAvailabilityItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "availabilityItems": n => { staffAvailabilityItem.availabilityItems = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAvailabilityItem) as any ; },
        "@odata.type": n => { staffAvailabilityItem.odataType = n.getStringValue() as any ; },
        "staffId": n => { staffAvailabilityItem.staffId = n.getStringValue() as any ; },
    }
}
