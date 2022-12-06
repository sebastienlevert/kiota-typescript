import {deserializeIntoRbacApplication} from './deserializeIntoRbacApplication';
import {RoleManagement} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRoleManagement(roleManagement: RoleManagement | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "directory": n => { roleManagement.directory = n.getObject(deserializeIntoRbacApplication) as any ; },
        "entitlementManagement": n => { roleManagement.entitlementManagement = n.getObject(deserializeIntoRbacApplication) as any ; },
        "@odata.type": n => { roleManagement.odataType = n.getStringValue() as any ; },
    }
}
