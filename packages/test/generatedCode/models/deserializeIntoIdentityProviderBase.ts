import {deserializeIntoEntity} from './deserializeIntoEntity';
import {IdentityProviderBase} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityProviderBase(identityProviderBase: IdentityProviderBase | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(identityProviderBase),
        "displayName": n => { identityProviderBase.displayName = n.getStringValue() as any ; },
    }
}
