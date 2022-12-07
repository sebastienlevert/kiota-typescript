import {OnPremisesProvisioningError} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnPremisesProvisioningError(writer: SerializationWriter, onPremisesProvisioningError: OnPremisesProvisioningError | undefined = {}) : void {
            writer.writeStringValue("category", onPremisesProvisioningError.category);
            writer.writeDateValue("occurredDateTime", onPremisesProvisioningError.occurredDateTime);
            writer.writeStringValue("propertyCausingError", onPremisesProvisioningError.propertyCausingError);
            writer.writeStringValue("value", onPremisesProvisioningError.value);
}
