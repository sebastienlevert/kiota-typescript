import {ParticipantJoiningNotification} from './index';
import {serializeCall} from './serializeCall';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeParticipantJoiningNotification(writer: SerializationWriter, participantJoiningNotification: ParticipantJoiningNotification | undefined = {}) : void {
        serializeEntity(writer, participantJoiningNotification)
            writer.writeObjectValueFromMethod("call", participantJoiningNotification.call as any, serializeCall);
}
