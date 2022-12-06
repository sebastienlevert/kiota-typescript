import {AllowInvitesFrom} from './allowInvitesFrom';
import {AuthorizationPolicy} from './index';
import {serializeDefaultUserRolePermissions} from './serializeDefaultUserRolePermissions';
import {serializePolicyBase} from './serializePolicyBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAuthorizationPolicy(writer: SerializationWriter, authorizationPolicy: AuthorizationPolicy | undefined = {}) : void {
        serializePolicyBase(writer, authorizationPolicy)
            writer.writeBooleanValue("allowedToSignUpEmailBasedSubscriptions", authorizationPolicy.allowedToSignUpEmailBasedSubscriptions);
            writer.writeBooleanValue("allowedToUseSSPR", authorizationPolicy.allowedToUseSSPR);
            writer.writeBooleanValue("allowEmailVerifiedUsersToJoinOrganization", authorizationPolicy.allowEmailVerifiedUsersToJoinOrganization);
            writer.writeEnumValue<AllowInvitesFrom>("allowInvitesFrom", authorizationPolicy.allowInvitesFrom);
            writer.writeBooleanValue("blockMsolPowerShell", authorizationPolicy.blockMsolPowerShell);
            writer.writeObjectValueFromMethod("defaultUserRolePermissions", authorizationPolicy.defaultUserRolePermissions as any, serializeDefaultUserRolePermissions);
            writer.writeStringValue("guestUserRoleId", authorizationPolicy.guestUserRoleId);
}
