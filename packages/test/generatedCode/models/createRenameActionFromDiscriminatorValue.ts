import {RenameAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRenameActionFromDiscriminatorValue(parseNode: ParseNode | undefined) : RenameAction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RenameAction();
}
