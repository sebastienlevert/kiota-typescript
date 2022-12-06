import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import {UnmuteParticipantOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnmuteParticipantOperation(unmuteParticipantOperation: UnmuteParticipantOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(unmuteParticipantOperation),
    }
}
