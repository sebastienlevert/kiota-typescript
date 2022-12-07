import {ProvisionedPlan} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisionedPlan(provisionedPlan: ProvisionedPlan | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "capabilityStatus": n => { provisionedPlan.capabilityStatus = n.getStringValue() as any ; },
        "provisioningStatus": n => { provisionedPlan.provisioningStatus = n.getStringValue() as any ; },
        "service": n => { provisionedPlan.service = n.getStringValue() as any ; },
    }
}
