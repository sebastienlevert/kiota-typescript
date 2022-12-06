import {deserializeIntoIdentitySet} from '../deserializeIntoIdentitySet';
import {deserializeIntoEndpoint} from './deserializeIntoEndpoint';
import {deserializeIntoUserFeedback} from './deserializeIntoUserFeedback';
import {ParticipantEndpoint} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoParticipantEndpoint(participantEndpoint: ParticipantEndpoint | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEndpoint(participantEndpoint),
        "feedback": n => { participantEndpoint.feedback = n.getObject(deserializeIntoUserFeedback) as any ; },
        "identity": n => { participantEndpoint.identity = n.getObject(deserializeIntoIdentitySet) as any ; },
    }
}
