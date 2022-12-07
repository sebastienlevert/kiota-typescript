import {AttachmentBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAttachmentBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AttachmentBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AttachmentBase();
}
