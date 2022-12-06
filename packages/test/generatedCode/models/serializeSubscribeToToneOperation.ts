import {SubscribeToToneOperation} from './index';
import {serializeCommsOperation} from './serializeCommsOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSubscribeToToneOperation(writer: SerializationWriter, subscribeToToneOperation: SubscribeToToneOperation | undefined = {}) : void {
        serializeCommsOperation(writer, subscribeToToneOperation)
}
