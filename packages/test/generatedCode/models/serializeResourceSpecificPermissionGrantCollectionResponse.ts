import {ResourceSpecificPermissionGrantCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeResourceSpecificPermissionGrant} from './serializeResourceSpecificPermissionGrant';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResourceSpecificPermissionGrantCollectionResponse(writer: SerializationWriter, resourceSpecificPermissionGrantCollectionResponse: ResourceSpecificPermissionGrantCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, resourceSpecificPermissionGrantCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", resourceSpecificPermissionGrantCollectionResponse.value as any, serializeResourceSpecificPermissionGrant);
}
