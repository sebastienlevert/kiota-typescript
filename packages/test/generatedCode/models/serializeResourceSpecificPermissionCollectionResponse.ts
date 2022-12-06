import {ResourceSpecificPermissionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeResourceSpecificPermission} from './serializeResourceSpecificPermission';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResourceSpecificPermissionCollectionResponse(writer: SerializationWriter, resourceSpecificPermissionCollectionResponse: ResourceSpecificPermissionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, resourceSpecificPermissionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", resourceSpecificPermissionCollectionResponse.value as any, serializeResourceSpecificPermission);
}
