import {Filter} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFilterFromDiscriminatorValue(parseNode: ParseNode | undefined) : Filter {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Filter();
}
