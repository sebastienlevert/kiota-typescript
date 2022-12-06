import {UnifiedRolePermissionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRolePermission} from './serializeUnifiedRolePermission';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRolePermissionCollectionResponse(writer: SerializationWriter, unifiedRolePermissionCollectionResponse: UnifiedRolePermissionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRolePermissionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", unifiedRolePermissionCollectionResponse.value as any, serializeUnifiedRolePermission);
}
