import {CancelMediaProcessingOperation} from './index';
import {serializeCommsOperation} from './serializeCommsOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCancelMediaProcessingOperation(writer: SerializationWriter, cancelMediaProcessingOperation: CancelMediaProcessingOperation | undefined = {}) : void {
        serializeCommsOperation(writer, cancelMediaProcessingOperation)
}
