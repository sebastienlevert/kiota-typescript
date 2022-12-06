import {UnmuteParticipantOperation} from './index';
import {serializeCommsOperation} from './serializeCommsOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnmuteParticipantOperation(writer: SerializationWriter, unmuteParticipantOperation: UnmuteParticipantOperation | undefined = {}) : void {
        serializeCommsOperation(writer, unmuteParticipantOperation)
}
