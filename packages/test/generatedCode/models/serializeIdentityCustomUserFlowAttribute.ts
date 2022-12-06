import {IdentityCustomUserFlowAttribute} from './index';
import {serializeIdentityUserFlowAttribute} from './serializeIdentityUserFlowAttribute';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityCustomUserFlowAttribute(writer: SerializationWriter, identityCustomUserFlowAttribute: IdentityCustomUserFlowAttribute | undefined = {}) : void {
        serializeIdentityUserFlowAttribute(writer, identityCustomUserFlowAttribute)
}
