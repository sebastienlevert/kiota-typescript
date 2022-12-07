import {MoveAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMoveAction(writer: SerializationWriter, moveAction: MoveAction | undefined = {}) : void {
            writer.writeStringValue("from", moveAction.from);
            writer.writeStringValue("to", moveAction.to);
}
