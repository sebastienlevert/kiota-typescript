import {ResourcePermissionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeResourcePermission} from './serializeResourcePermission';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResourcePermissionCollectionResponse(writer: SerializationWriter, resourcePermissionCollectionResponse: ResourcePermissionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, resourcePermissionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", resourcePermissionCollectionResponse.value as any, serializeResourcePermission);
}
