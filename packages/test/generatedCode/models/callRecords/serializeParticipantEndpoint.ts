import {serializeIdentitySet} from '../serializeIdentitySet';
import {ParticipantEndpoint} from './index';
import {serializeEndpoint} from './serializeEndpoint';
import {serializeUserFeedback} from './serializeUserFeedback';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeParticipantEndpoint(writer: SerializationWriter, participantEndpoint: ParticipantEndpoint | undefined = {}) : void {
        serializeEndpoint(writer, participantEndpoint)
            writer.writeObjectValueFromMethod("feedback", participantEndpoint.feedback as any, serializeUserFeedback);
            writer.writeObjectValueFromMethod("identity", participantEndpoint.identity as any, serializeIdentitySet);
}
