import {StartHoldMusicOperation} from './index';
import {serializeCommsOperation} from './serializeCommsOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStartHoldMusicOperation(writer: SerializationWriter, startHoldMusicOperation: StartHoldMusicOperation | undefined = {}) : void {
        serializeCommsOperation(writer, startHoldMusicOperation)
}
