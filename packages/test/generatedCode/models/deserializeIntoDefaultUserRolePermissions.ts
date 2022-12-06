import {DefaultUserRolePermissions} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDefaultUserRolePermissions(defaultUserRolePermissions: DefaultUserRolePermissions | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "allowedToCreateApps": n => { defaultUserRolePermissions.allowedToCreateApps = n.getBooleanValue() as any ; },
        "allowedToCreateSecurityGroups": n => { defaultUserRolePermissions.allowedToCreateSecurityGroups = n.getBooleanValue() as any ; },
        "allowedToReadOtherUsers": n => { defaultUserRolePermissions.allowedToReadOtherUsers = n.getBooleanValue() as any ; },
        "@odata.type": n => { defaultUserRolePermissions.odataType = n.getStringValue() as any ; },
        "permissionGrantPoliciesAssigned": n => { defaultUserRolePermissions.permissionGrantPoliciesAssigned = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
