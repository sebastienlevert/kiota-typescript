import {ItemFacet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemFacetFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemFacet {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemFacet();
}
