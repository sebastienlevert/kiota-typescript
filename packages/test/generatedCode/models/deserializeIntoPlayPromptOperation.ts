import {deserializeIntoCommsOperation} from './deserializeIntoCommsOperation';
import {PlayPromptOperation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlayPromptOperation(playPromptOperation: PlayPromptOperation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCommsOperation(playPromptOperation),
    }
}
