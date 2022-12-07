import {VersionAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createVersionActionFromDiscriminatorValue(parseNode: ParseNode | undefined) : VersionAction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new VersionAction();
}
