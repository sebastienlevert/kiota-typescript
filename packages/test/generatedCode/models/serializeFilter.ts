import {Filter} from './index';
import {serializeFilterGroup} from './serializeFilterGroup';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFilter(writer: SerializationWriter, filter: Filter | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("categoryFilterGroups", filter.categoryFilterGroups as any, serializeFilterGroup);
            writer.writeCollectionOfObjectValuesFromMethod("groups", filter.groups as any, serializeFilterGroup);
            writer.writeCollectionOfObjectValuesFromMethod("inputFilterGroups", filter.inputFilterGroups as any, serializeFilterGroup);
}
