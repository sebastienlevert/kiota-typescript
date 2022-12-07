import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {Shared} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoShared(shared: Shared | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "owner": n => { shared.owner = n.getObject(deserializeIntoIdentitySet) as any ; },
        "scope": n => { shared.scope = n.getStringValue() as any ; },
        "sharedBy": n => { shared.sharedBy = n.getObject(deserializeIntoIdentitySet) as any ; },
        "sharedDateTime": n => { shared.sharedDateTime = n.getDateValue() as any ; },
    }
}
