import {deserializeIntoCall} from './deserializeIntoCall';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ParticipantLeftNotification} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoParticipantLeftNotification(participantLeftNotification: ParticipantLeftNotification | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(participantLeftNotification),
        "call": n => { participantLeftNotification.call = n.getObject(deserializeIntoCall) as any ; },
        "participantId": n => { participantLeftNotification.participantId = n.getStringValue() as any ; },
    }
}
