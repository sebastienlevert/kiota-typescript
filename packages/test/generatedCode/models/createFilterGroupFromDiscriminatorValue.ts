import {FilterGroup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFilterGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) : FilterGroup {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FilterGroup();
}
