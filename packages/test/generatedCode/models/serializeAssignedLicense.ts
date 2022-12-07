import {AssignedLicense} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignedLicense(writer: SerializationWriter, assignedLicense: AssignedLicense | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("disabledPlans", assignedLicense.disabledPlans);
            writer.writeStringValue("skuId", assignedLicense.skuId);
}
