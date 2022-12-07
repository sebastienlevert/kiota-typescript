import {FilterGroup} from './index';
import {serializeFilterClause} from './serializeFilterClause';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilterGroup(writer: SerializationWriter, filterGroup: FilterGroup | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("clauses", filterGroup.clauses as any, serializeFilterClause);
            writer.writeStringValue("name", filterGroup.name);
}
