import {PendingContentUpdate} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPendingContentUpdate(pendingContentUpdate: PendingContentUpdate | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "queuedDateTime": n => { pendingContentUpdate.queuedDateTime = n.getDateValue() as any ; },
    }
}
