import {UpdateRecordingStatusOperation} from './index';
import {serializeCommsOperation} from './serializeCommsOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUpdateRecordingStatusOperation(writer: SerializationWriter, updateRecordingStatusOperation: UpdateRecordingStatusOperation | undefined = {}) : void {
        serializeCommsOperation(writer, updateRecordingStatusOperation)
}
