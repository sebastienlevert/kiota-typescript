import {PlayPromptOperation} from './index';
import {serializeCommsOperation} from './serializeCommsOperation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePlayPromptOperation(writer: SerializationWriter, playPromptOperation: PlayPromptOperation | undefined = {}) : void {
        serializeCommsOperation(writer, playPromptOperation)
}
