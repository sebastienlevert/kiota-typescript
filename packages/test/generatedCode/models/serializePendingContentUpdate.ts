import {PendingContentUpdate} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePendingContentUpdate(writer: SerializationWriter, pendingContentUpdate: PendingContentUpdate | undefined = {}) : void {
            writer.writeDateValue("queuedDateTime", pendingContentUpdate.queuedDateTime);
}
