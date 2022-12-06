import {ProvisioningStep} from './index';
import {ProvisioningResult} from './provisioningResult';
import {ProvisioningStepType} from './provisioningStepType';
import {serializeDetailsInfo} from './serializeDetailsInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProvisioningStep(writer: SerializationWriter, provisioningStep: ProvisioningStep | undefined = {}) : void {
            writer.writeStringValue("description", provisioningStep.description);
            writer.writeObjectValueFromMethod("details", provisioningStep.details as any, serializeDetailsInfo);
            writer.writeStringValue("name", provisioningStep.name);
            writer.writeStringValue("@odata.type", provisioningStep.odataType);
            writer.writeEnumValue<ProvisioningStepType>("provisioningStepType", provisioningStep.provisioningStepType);
            writer.writeEnumValue<ProvisioningResult>("status", provisioningStep.status);
}
