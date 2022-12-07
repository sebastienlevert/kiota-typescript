import {EditAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEditActionFromDiscriminatorValue(parseNode: ParseNode | undefined) : EditAction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EditAction();
}
