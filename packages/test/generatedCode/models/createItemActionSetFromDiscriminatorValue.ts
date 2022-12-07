import {ItemActionSet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemActionSetFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemActionSet {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemActionSet();
}
