import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import {StartHoldMusicOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStartHoldMusicOperation(startHoldMusicOperation: StartHoldMusicOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(startHoldMusicOperation),
    }
}
