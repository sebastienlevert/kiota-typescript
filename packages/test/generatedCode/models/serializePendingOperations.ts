import {PendingOperations} from './index';
import {serializePendingContentUpdate} from './serializePendingContentUpdate';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePendingOperations(writer: SerializationWriter, pendingOperations: PendingOperations | undefined = {}) : void {
            writer.writeObjectValueFromMethod("pendingContentUpdate", pendingOperations.pendingContentUpdate as any, serializePendingContentUpdate);
}
