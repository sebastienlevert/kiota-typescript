import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IdentityProvider} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityProvider(identityProvider: IdentityProvider | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(identityProvider),
        "clientId": n => { identityProvider.clientId = n.getStringValue() as any ; },
        "clientSecret": n => { identityProvider.clientSecret = n.getStringValue() as any ; },
        "name": n => { identityProvider.name = n.getStringValue() as any ; },
        "type": n => { identityProvider.type = n.getStringValue() as any ; },
    }
}
