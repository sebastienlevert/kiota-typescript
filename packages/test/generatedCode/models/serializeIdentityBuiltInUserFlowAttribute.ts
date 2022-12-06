import {IdentityBuiltInUserFlowAttribute} from './index';
import {serializeIdentityUserFlowAttribute} from './serializeIdentityUserFlowAttribute';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityBuiltInUserFlowAttribute(writer: SerializationWriter, identityBuiltInUserFlowAttribute: IdentityBuiltInUserFlowAttribute | undefined = {}) : void {
        serializeIdentityUserFlowAttribute(writer, identityBuiltInUserFlowAttribute)
}
