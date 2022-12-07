import {ItemAddress} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemAddressFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemAddress {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemAddress();
}
