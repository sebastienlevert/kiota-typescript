import {deserializeIntoFilterClause} from './deserializeIntoFilterClause';
import {FilterGroup} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFilterGroup(filterGroup: FilterGroup | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "clauses": n => { filterGroup.clauses = n.getCollectionOfObjectValuesFromMethod(deserializeIntoFilterClause) as any ; },
        "name": n => { filterGroup.name = n.getStringValue() as any ; },
    }
}
