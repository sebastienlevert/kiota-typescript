import {CallTranscript} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCallTranscript(writer: SerializationWriter, callTranscript: CallTranscript | undefined = {}) : void {
        serializeEntity(writer, callTranscript)
            writer.writeStringValue("content", callTranscript.content);
            writer.writeDateValue("createdDateTime", callTranscript.createdDateTime);
}
