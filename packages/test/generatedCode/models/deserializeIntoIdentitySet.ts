import {deserializeIntoIdentity} from './deserializeIntoIdentity';
import {IdentitySet} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentitySet(identitySet: IdentitySet | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "application": n => { identitySet.application = n.getObject(deserializeIntoIdentity) as any ; },
        "device": n => { identitySet.device = n.getObject(deserializeIntoIdentity) as any ; },
        "user": n => { identitySet.user = n.getObject(deserializeIntoIdentity) as any ; },
    }
}
