import {serializeBaseCollectionPaginationCountResponse} from '../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeResourceSpecificPermissionGrant} from '../../../models/serializeResourceSpecificPermissionGrant';
import {CheckGrantedPermissionsForAppResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCheckGrantedPermissionsForAppResponse(writer: SerializationWriter, checkGrantedPermissionsForAppResponse: CheckGrantedPermissionsForAppResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, checkGrantedPermissionsForAppResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", checkGrantedPermissionsForAppResponse.value as any, serializeResourceSpecificPermissionGrant);
}
