import {deserializeIntoApiAuthenticationConfigurationBase} from './deserializeIntoApiAuthenticationConfigurationBase';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IdentityApiConnector} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityApiConnector(identityApiConnector: IdentityApiConnector | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(identityApiConnector),
        "authenticationConfiguration": n => { identityApiConnector.authenticationConfiguration = n.getObject(deserializeIntoApiAuthenticationConfigurationBase) as any ; },
        "displayName": n => { identityApiConnector.displayName = n.getStringValue() as any ; },
        "targetUrl": n => { identityApiConnector.targetUrl = n.getStringValue() as any ; },
    }
}
