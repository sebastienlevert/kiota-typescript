import {RolePermission} from './index';
import {serializeResourceAction} from './serializeResourceAction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRolePermission(writer: SerializationWriter, rolePermission: RolePermission | undefined = {}) : void {
            writer.writeStringValue("@odata.type", rolePermission.odataType);
            writer.writeCollectionOfObjectValuesFromMethod("resourceActions", rolePermission.resourceActions as any, serializeResourceAction);
}
