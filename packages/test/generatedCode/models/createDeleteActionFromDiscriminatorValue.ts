import {DeleteAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeleteActionFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeleteAction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeleteAction();
}
