import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoMediaStream} from './deserializeIntoMediaStream';
import {deserializeIntoParticipantInfo} from './deserializeIntoParticipantInfo';
import {deserializeIntoRecordingInfo} from './deserializeIntoRecordingInfo';
import {Participant} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoParticipant(participant: Participant | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(participant),
        "info": n => { participant.info = n.getObject(deserializeIntoParticipantInfo) as any ; },
        "isInLobby": n => { participant.isInLobby = n.getBooleanValue() as any ; },
        "isMuted": n => { participant.isMuted = n.getBooleanValue() as any ; },
        "mediaStreams": n => { participant.mediaStreams = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMediaStream) as any ; },
        "metadata": n => { participant.metadata = n.getStringValue() as any ; },
        "recordingInfo": n => { participant.recordingInfo = n.getObject(deserializeIntoRecordingInfo) as any ; },
    }
}
