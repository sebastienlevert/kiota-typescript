import {deserializeIntoEntity} from './deserializeIntoEntity';
import {FederatedIdentityCredential} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFederatedIdentityCredential(federatedIdentityCredential: FederatedIdentityCredential | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(federatedIdentityCredential),
        "audiences": n => { federatedIdentityCredential.audiences = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "description": n => { federatedIdentityCredential.description = n.getStringValue() as any ; },
        "issuer": n => { federatedIdentityCredential.issuer = n.getStringValue() as any ; },
        "name": n => { federatedIdentityCredential.name = n.getStringValue() as any ; },
        "subject": n => { federatedIdentityCredential.subject = n.getStringValue() as any ; },
    }
}
