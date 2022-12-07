import {OnPremisesProvisioningError} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnPremisesProvisioningError(onPremisesProvisioningError: OnPremisesProvisioningError | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "category": n => { onPremisesProvisioningError.category = n.getStringValue() as any ; },
        "occurredDateTime": n => { onPremisesProvisioningError.occurredDateTime = n.getDateValue() as any ; },
        "propertyCausingError": n => { onPremisesProvisioningError.propertyCausingError = n.getStringValue() as any ; },
        "value": n => { onPremisesProvisioningError.value = n.getStringValue() as any ; },
    }
}
