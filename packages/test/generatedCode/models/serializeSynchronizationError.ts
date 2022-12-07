import {SynchronizationError} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSynchronizationError(writer: SerializationWriter, synchronizationError: SynchronizationError | undefined = {}) : void {
            writer.writeStringValue("code", synchronizationError.code);
            writer.writeStringValue("message", synchronizationError.message);
            writer.writeBooleanValue("tenantActionable", synchronizationError.tenantActionable);
}
