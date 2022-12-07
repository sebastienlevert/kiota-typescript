import {WebPart} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWebPartFromDiscriminatorValue(parseNode: ParseNode | undefined) : WebPart {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WebPart();
}
