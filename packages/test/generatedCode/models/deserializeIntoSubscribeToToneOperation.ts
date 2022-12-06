import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import {SubscribeToToneOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSubscribeToToneOperation(subscribeToToneOperation: SubscribeToToneOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(subscribeToToneOperation),
    }
}
