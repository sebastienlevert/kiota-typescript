import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import {CancelMediaProcessingOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCancelMediaProcessingOperation(cancelMediaProcessingOperation: CancelMediaProcessingOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(cancelMediaProcessingOperation),
    }
}
