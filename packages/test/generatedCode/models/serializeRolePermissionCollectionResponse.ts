import {RolePermissionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRolePermission} from './serializeRolePermission';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRolePermissionCollectionResponse(writer: SerializationWriter, rolePermissionCollectionResponse: RolePermissionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, rolePermissionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", rolePermissionCollectionResponse.value as any, serializeRolePermission);
}
