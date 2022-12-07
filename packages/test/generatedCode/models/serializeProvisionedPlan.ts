import {ProvisionedPlan} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProvisionedPlan(writer: SerializationWriter, provisionedPlan: ProvisionedPlan | undefined = {}) : void {
            writer.writeStringValue("capabilityStatus", provisionedPlan.capabilityStatus);
            writer.writeStringValue("provisioningStatus", provisionedPlan.provisioningStatus);
            writer.writeStringValue("service", provisionedPlan.service);
}
