import {deserializeIntoIdentityUserFlowAttribute} from './deserializeIntoIdentityUserFlowAttribute';
import {IdentityBuiltInUserFlowAttribute} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityBuiltInUserFlowAttribute(identityBuiltInUserFlowAttribute: IdentityBuiltInUserFlowAttribute | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentityUserFlowAttribute(identityBuiltInUserFlowAttribute),
    }
}
