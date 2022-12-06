import {StopHoldMusicOperation} from './index';
import {serializeCommsOperation} from './serializeCommsOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStopHoldMusicOperation(writer: SerializationWriter, stopHoldMusicOperation: StopHoldMusicOperation | undefined = {}) : void {
        serializeCommsOperation(writer, stopHoldMusicOperation)
}
