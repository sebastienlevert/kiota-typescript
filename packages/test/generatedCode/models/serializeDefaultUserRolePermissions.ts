import {DefaultUserRolePermissions} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDefaultUserRolePermissions(writer: SerializationWriter, defaultUserRolePermissions: DefaultUserRolePermissions | undefined = {}) : void {
            writer.writeBooleanValue("allowedToCreateApps", defaultUserRolePermissions.allowedToCreateApps);
            writer.writeBooleanValue("allowedToCreateSecurityGroups", defaultUserRolePermissions.allowedToCreateSecurityGroups);
            writer.writeBooleanValue("allowedToReadOtherUsers", defaultUserRolePermissions.allowedToReadOtherUsers);
            writer.writeStringValue("@odata.type", defaultUserRolePermissions.odataType);
            writer.writeCollectionOfPrimitiveValues<string>("permissionGrantPoliciesAssigned", defaultUserRolePermissions.permissionGrantPoliciesAssigned);
}
