import {MuteParticipantOperation} from './index';
import {serializeCommsOperation} from './serializeCommsOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMuteParticipantOperation(writer: SerializationWriter, muteParticipantOperation: MuteParticipantOperation | undefined = {}) : void {
        serializeCommsOperation(writer, muteParticipantOperation)
}
