import {ItemActivityOLD} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemActivityOLDFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemActivityOLD {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemActivityOLD();
}
