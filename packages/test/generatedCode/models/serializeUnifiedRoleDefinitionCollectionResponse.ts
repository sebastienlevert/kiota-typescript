import {UnifiedRoleDefinitionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleDefinition} from './serializeUnifiedRoleDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleDefinitionCollectionResponse(writer: SerializationWriter, unifiedRoleDefinitionCollectionResponse: UnifiedRoleDefinitionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleDefinitionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", unifiedRoleDefinitionCollectionResponse.value as any, serializeUnifiedRoleDefinition);
}
