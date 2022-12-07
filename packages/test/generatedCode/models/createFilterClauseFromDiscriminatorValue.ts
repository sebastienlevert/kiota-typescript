import {FilterClause} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFilterClauseFromDiscriminatorValue(parseNode: ParseNode | undefined) : FilterClause {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FilterClause();
}
