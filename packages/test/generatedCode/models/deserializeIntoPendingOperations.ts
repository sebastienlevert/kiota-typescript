import {deserializeIntoPendingContentUpdate} from './deserializeIntoPendingContentUpdate';
import {PendingOperations} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPendingOperations(pendingOperations: PendingOperations | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { pendingOperations.odataType = n.getStringValue() as any ; },
        "pendingContentUpdate": n => { pendingOperations.pendingContentUpdate = n.getObject(deserializeIntoPendingContentUpdate) as any ; },
    }
}
