import {ParticipantLeftNotification} from './index';
import {serializeCall} from './serializeCall';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeParticipantLeftNotification(writer: SerializationWriter, participantLeftNotification: ParticipantLeftNotification | undefined = {}) : void {
        serializeEntity(writer, participantLeftNotification)
            writer.writeObjectValueFromMethod("call", participantLeftNotification.call as any, serializeCall);
            writer.writeStringValue("participantId", participantLeftNotification.participantId);
}
