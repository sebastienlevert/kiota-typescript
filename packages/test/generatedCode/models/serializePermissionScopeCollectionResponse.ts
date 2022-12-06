import {PermissionScopeCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePermissionScope} from './serializePermissionScope';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePermissionScopeCollectionResponse(writer: SerializationWriter, permissionScopeCollectionResponse: PermissionScopeCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, permissionScopeCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", permissionScopeCollectionResponse.value as any, serializePermissionScope);
}
