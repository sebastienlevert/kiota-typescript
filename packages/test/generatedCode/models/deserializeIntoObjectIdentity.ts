import {ObjectIdentity} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoObjectIdentity(objectIdentity: ObjectIdentity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "issuer": n => { objectIdentity.issuer = n.getStringValue() as any ; },
        "issuerAssignedId": n => { objectIdentity.issuerAssignedId = n.getStringValue() as any ; },
        "signInType": n => { objectIdentity.signInType = n.getStringValue() as any ; },
    }
}
