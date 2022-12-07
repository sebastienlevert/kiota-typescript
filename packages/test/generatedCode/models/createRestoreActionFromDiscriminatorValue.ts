import {RestoreAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRestoreActionFromDiscriminatorValue(parseNode: ParseNode | undefined) : RestoreAction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RestoreAction();
}
