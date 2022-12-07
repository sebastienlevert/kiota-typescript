import {Identity} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentity(identity: Identity | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { identity.displayName = n.getStringValue() as any ; },
        "id": n => { identity.id = n.getStringValue() as any ; },
    }
}
