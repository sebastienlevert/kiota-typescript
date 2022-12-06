import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import {RecordOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRecordOperation(recordOperation: RecordOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(recordOperation),
        "recordingAccessToken": n => { recordOperation.recordingAccessToken = n.getStringValue() as any ; },
        "recordingLocation": n => { recordOperation.recordingLocation = n.getStringValue() as any ; },
    }
}
