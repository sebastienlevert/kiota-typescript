import {IdentityUserFlowAttributeDataType} from './identityUserFlowAttributeDataType';
import {IdentityUserFlowAttributeType} from './identityUserFlowAttributeType';
import {IdentityUserFlowAttribute} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityUserFlowAttribute(writer: SerializationWriter, identityUserFlowAttribute: IdentityUserFlowAttribute | undefined = {}) : void {
        serializeEntity(writer, identityUserFlowAttribute)
            writer.writeEnumValue<IdentityUserFlowAttributeDataType>("dataType", identityUserFlowAttribute.dataType);
            writer.writeStringValue("description", identityUserFlowAttribute.description);
            writer.writeStringValue("displayName", identityUserFlowAttribute.displayName);
            writer.writeEnumValue<IdentityUserFlowAttributeType>("userFlowAttributeType", identityUserFlowAttribute.userFlowAttributeType);
}
