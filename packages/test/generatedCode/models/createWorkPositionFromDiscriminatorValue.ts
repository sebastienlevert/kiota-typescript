import {WorkPosition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWorkPositionFromDiscriminatorValue(parseNode: ParseNode | undefined) : WorkPosition {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WorkPosition();
}
