import {deserializeIntoPendingContentUpdate} from './deserializeIntoPendingContentUpdate';
import {PendingOperations} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPendingOperations(pendingOperations: PendingOperations | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "pendingContentUpdate": n => { pendingOperations.pendingContentUpdate = n.getObject(deserializeIntoPendingContentUpdate) as any ; },
    }
}
