import {deserializeIntoIdentityProviderBase} from './deserializeIntoIdentityProviderBase';
import {BuiltInIdentityProvider} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBuiltInIdentityProvider(builtInIdentityProvider: BuiltInIdentityProvider | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentityProviderBase(builtInIdentityProvider),
        "identityProviderType": n => { builtInIdentityProvider.identityProviderType = n.getStringValue() as any ; },
    }
}
