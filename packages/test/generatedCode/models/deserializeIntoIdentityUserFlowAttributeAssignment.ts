import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoIdentityUserFlowAttribute} from './deserializeIntoIdentityUserFlowAttribute';
import {deserializeIntoUserAttributeValuesItem} from './deserializeIntoUserAttributeValuesItem';
import {IdentityUserFlowAttributeInputType} from './identityUserFlowAttributeInputType';
import {IdentityUserFlowAttributeAssignment} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityUserFlowAttributeAssignment(identityUserFlowAttributeAssignment: IdentityUserFlowAttributeAssignment | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(identityUserFlowAttributeAssignment),
        "displayName": n => { identityUserFlowAttributeAssignment.displayName = n.getStringValue() as any ; },
        "isOptional": n => { identityUserFlowAttributeAssignment.isOptional = n.getBooleanValue() as any ; },
        "requiresVerification": n => { identityUserFlowAttributeAssignment.requiresVerification = n.getBooleanValue() as any ; },
        "userAttribute": n => { identityUserFlowAttributeAssignment.userAttribute = n.getObject(deserializeIntoIdentityUserFlowAttribute) as any ; },
        "userAttributeValues": n => { identityUserFlowAttributeAssignment.userAttributeValues = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserAttributeValuesItem) as any ; },
        "userInputType": n => { identityUserFlowAttributeAssignment.userInputType = n.getEnumValue<IdentityUserFlowAttributeInputType>(IdentityUserFlowAttributeInputType) as any ; },
    }
}
