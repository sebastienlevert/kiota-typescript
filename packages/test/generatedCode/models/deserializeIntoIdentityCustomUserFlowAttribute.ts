import {deserializeIntoIdentityUserFlowAttribute} from './deserializeIntoIdentityUserFlowAttribute';
import {IdentityCustomUserFlowAttribute} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityCustomUserFlowAttribute(identityCustomUserFlowAttribute: IdentityCustomUserFlowAttribute | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentityUserFlowAttribute(identityCustomUserFlowAttribute),
    }
}
