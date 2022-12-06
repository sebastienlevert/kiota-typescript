import {PermissionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePermission} from './serializePermission';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePermissionCollectionResponse(writer: SerializationWriter, permissionCollectionResponse: PermissionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, permissionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", permissionCollectionResponse.value as any, serializePermission);
}
