import {IdentityUserFlowAttributeInputType} from './identityUserFlowAttributeInputType';
import {IdentityUserFlowAttributeAssignment} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeIdentityUserFlowAttribute} from './serializeIdentityUserFlowAttribute';
import {serializeUserAttributeValuesItem} from './serializeUserAttributeValuesItem';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityUserFlowAttributeAssignment(writer: SerializationWriter, identityUserFlowAttributeAssignment: IdentityUserFlowAttributeAssignment | undefined = {}) : void {
        serializeEntity(writer, identityUserFlowAttributeAssignment)
            writer.writeStringValue("displayName", identityUserFlowAttributeAssignment.displayName);
            writer.writeBooleanValue("isOptional", identityUserFlowAttributeAssignment.isOptional);
            writer.writeBooleanValue("requiresVerification", identityUserFlowAttributeAssignment.requiresVerification);
            writer.writeObjectValueFromMethod("userAttribute", identityUserFlowAttributeAssignment.userAttribute as any, serializeIdentityUserFlowAttribute);
            writer.writeCollectionOfObjectValuesFromMethod("userAttributeValues", identityUserFlowAttributeAssignment.userAttributeValues as any, serializeUserAttributeValuesItem);
            writer.writeEnumValue<IdentityUserFlowAttributeInputType>("userInputType", identityUserFlowAttributeAssignment.userInputType);
}
