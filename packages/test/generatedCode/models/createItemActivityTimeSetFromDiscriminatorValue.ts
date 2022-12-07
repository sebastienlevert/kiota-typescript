import {ItemActivityTimeSet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemActivityTimeSetFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemActivityTimeSet {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemActivityTimeSet();
}
