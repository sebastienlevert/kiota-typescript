import {deserializeIntoCall} from './deserializeIntoCall';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ParticipantJoiningNotification} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoParticipantJoiningNotification(participantJoiningNotification: ParticipantJoiningNotification | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(participantJoiningNotification),
        "call": n => { participantJoiningNotification.call = n.getObject(deserializeIntoCall) as any ; },
    }
}
