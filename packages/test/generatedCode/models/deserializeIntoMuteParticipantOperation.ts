import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import {MuteParticipantOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMuteParticipantOperation(muteParticipantOperation: MuteParticipantOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(muteParticipantOperation),
    }
}
