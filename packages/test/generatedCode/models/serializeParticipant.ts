import {Participant} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeMediaStream} from './serializeMediaStream';
import {serializeParticipantInfo} from './serializeParticipantInfo';
import {serializeRecordingInfo} from './serializeRecordingInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeParticipant(writer: SerializationWriter, participant: Participant | undefined = {}) : void {
        serializeEntity(writer, participant)
            writer.writeObjectValueFromMethod("info", participant.info as any, serializeParticipantInfo);
            writer.writeBooleanValue("isInLobby", participant.isInLobby);
            writer.writeBooleanValue("isMuted", participant.isMuted);
            writer.writeCollectionOfObjectValuesFromMethod("mediaStreams", participant.mediaStreams as any, serializeMediaStream);
            writer.writeStringValue("metadata", participant.metadata);
            writer.writeObjectValueFromMethod("recordingInfo", participant.recordingInfo as any, serializeRecordingInfo);
}
