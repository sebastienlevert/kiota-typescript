import {ItemPhone} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemPhoneFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemPhone {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemPhone();
}
