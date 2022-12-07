import {MoveAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMoveActionFromDiscriminatorValue(parseNode: ParseNode | undefined) : MoveAction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MoveAction();
}
