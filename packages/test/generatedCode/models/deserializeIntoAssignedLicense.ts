import {AssignedLicense} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAssignedLicense(assignedLicense: AssignedLicense | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "disabledPlans": n => { assignedLicense.disabledPlans = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "skuId": n => { assignedLicense.skuId = n.getStringValue() as any ; },
    }
}
