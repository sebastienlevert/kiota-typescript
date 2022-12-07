import {ItemPublication} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemPublicationFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemPublication {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemPublication();
}
