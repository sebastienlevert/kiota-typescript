import {AllowInvitesFrom} from './allowInvitesFrom';
import {deserializeIntoDefaultUserRolePermissions} from './deserializeIntoDefaultUserRolePermissions';
import {deserializeIntoPolicyBase} from './deserializeIntoPolicyBase';
import {AuthorizationPolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuthorizationPolicy(authorizationPolicy: AuthorizationPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPolicyBase(authorizationPolicy),
        "allowedToSignUpEmailBasedSubscriptions": n => { authorizationPolicy.allowedToSignUpEmailBasedSubscriptions = n.getBooleanValue() as any ; },
        "allowedToUseSSPR": n => { authorizationPolicy.allowedToUseSSPR = n.getBooleanValue() as any ; },
        "allowEmailVerifiedUsersToJoinOrganization": n => { authorizationPolicy.allowEmailVerifiedUsersToJoinOrganization = n.getBooleanValue() as any ; },
        "allowInvitesFrom": n => { authorizationPolicy.allowInvitesFrom = n.getEnumValue<AllowInvitesFrom>(AllowInvitesFrom) as any ; },
        "blockMsolPowerShell": n => { authorizationPolicy.blockMsolPowerShell = n.getBooleanValue() as any ; },
        "defaultUserRolePermissions": n => { authorizationPolicy.defaultUserRolePermissions = n.getObject(deserializeIntoDefaultUserRolePermissions) as any ; },
        "guestUserRoleId": n => { authorizationPolicy.guestUserRoleId = n.getStringValue() as any ; },
    }
}
