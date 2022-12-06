import {RoleDefinitionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRoleDefinition} from './serializeRoleDefinition';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRoleDefinitionCollectionResponse(writer: SerializationWriter, roleDefinitionCollectionResponse: RoleDefinitionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, roleDefinitionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", roleDefinitionCollectionResponse.value as any, serializeRoleDefinition);
}
