import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import {UpdateRecordingStatusOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUpdateRecordingStatusOperation(updateRecordingStatusOperation: UpdateRecordingStatusOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(updateRecordingStatusOperation),
    }
}
