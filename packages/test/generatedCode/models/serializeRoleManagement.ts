import {RoleManagement} from './index';
import {serializeRbacApplication} from './serializeRbacApplication';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRoleManagement(writer: SerializationWriter, roleManagement: RoleManagement | undefined = {}) : void {
            writer.writeObjectValueFromMethod("directory", roleManagement.directory as any, serializeRbacApplication);
            writer.writeObjectValueFromMethod("entitlementManagement", roleManagement.entitlementManagement as any, serializeRbacApplication);
            writer.writeStringValue("@odata.type", roleManagement.odataType);
}
