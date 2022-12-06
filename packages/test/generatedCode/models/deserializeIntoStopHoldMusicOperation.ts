import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import {StopHoldMusicOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStopHoldMusicOperation(stopHoldMusicOperation: StopHoldMusicOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(stopHoldMusicOperation),
    }
}
