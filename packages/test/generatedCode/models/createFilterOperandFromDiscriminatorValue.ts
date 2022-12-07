import {FilterOperand} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFilterOperandFromDiscriminatorValue(parseNode: ParseNode | undefined) : FilterOperand {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FilterOperand();
}
