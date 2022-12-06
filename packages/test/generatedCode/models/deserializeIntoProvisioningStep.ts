import {deserializeIntoDetailsInfo} from './deserializeIntoDetailsInfo';
import {ProvisioningStep} from './index';
import {ProvisioningResult} from './provisioningResult';
import {ProvisioningStepType} from './provisioningStepType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProvisioningStep(provisioningStep: ProvisioningStep | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { provisioningStep.description = n.getStringValue() as any ; },
        "details": n => { provisioningStep.details = n.getObject(deserializeIntoDetailsInfo) as any ; },
        "name": n => { provisioningStep.name = n.getStringValue() as any ; },
        "@odata.type": n => { provisioningStep.odataType = n.getStringValue() as any ; },
        "provisioningStepType": n => { provisioningStep.provisioningStepType = n.getEnumValue<ProvisioningStepType>(ProvisioningStepType) as any ; },
        "status": n => { provisioningStep.status = n.getEnumValue<ProvisioningResult>(ProvisioningResult) as any ; },
    }
}
