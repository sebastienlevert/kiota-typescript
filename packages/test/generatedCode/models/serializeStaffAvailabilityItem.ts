import {StaffAvailabilityItem} from './index';
import {serializeAvailabilityItem} from './serializeAvailabilityItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStaffAvailabilityItem(writer: SerializationWriter, staffAvailabilityItem: StaffAvailabilityItem | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("availabilityItems", staffAvailabilityItem.availabilityItems as any, serializeAvailabilityItem);
            writer.writeStringValue("@odata.type", staffAvailabilityItem.odataType);
            writer.writeStringValue("staffId", staffAvailabilityItem.staffId);
}
