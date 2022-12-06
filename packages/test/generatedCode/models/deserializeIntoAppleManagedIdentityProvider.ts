import {deserializeIntoIdentityProviderBase} from './deserializeIntoIdentityProviderBase';
import {AppleManagedIdentityProvider} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppleManagedIdentityProvider(appleManagedIdentityProvider: AppleManagedIdentityProvider | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoIdentityProviderBase(appleManagedIdentityProvider),
        "certificateData": n => { appleManagedIdentityProvider.certificateData = n.getStringValue() as any ; },
        "developerId": n => { appleManagedIdentityProvider.developerId = n.getStringValue() as any ; },
        "keyId": n => { appleManagedIdentityProvider.keyId = n.getStringValue() as any ; },
        "serviceId": n => { appleManagedIdentityProvider.serviceId = n.getStringValue() as any ; },
    }
}
