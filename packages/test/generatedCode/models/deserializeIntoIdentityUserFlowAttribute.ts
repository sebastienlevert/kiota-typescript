import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IdentityUserFlowAttributeDataType} from './identityUserFlowAttributeDataType';
import {IdentityUserFlowAttributeType} from './identityUserFlowAttributeType';
import {IdentityUserFlowAttribute} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityUserFlowAttribute(identityUserFlowAttribute: IdentityUserFlowAttribute | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(identityUserFlowAttribute),
        "dataType": n => { identityUserFlowAttribute.dataType = n.getEnumValue<IdentityUserFlowAttributeDataType>(IdentityUserFlowAttributeDataType) as any ; },
        "description": n => { identityUserFlowAttribute.description = n.getStringValue() as any ; },
        "displayName": n => { identityUserFlowAttribute.displayName = n.getStringValue() as any ; },
        "userFlowAttributeType": n => { identityUserFlowAttribute.userFlowAttributeType = n.getEnumValue<IdentityUserFlowAttributeType>(IdentityUserFlowAttributeType) as any ; },
    }
}
