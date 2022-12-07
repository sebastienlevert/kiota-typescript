import {ShareAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createShareActionFromDiscriminatorValue(parseNode: ParseNode | undefined) : ShareAction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ShareAction();
}
