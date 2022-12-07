import {MoveAction} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMoveAction(moveAction: MoveAction | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "from": n => { moveAction.from = n.getStringValue() as any ; },
        "to": n => { moveAction.to = n.getStringValue() as any ; },
    }
}
