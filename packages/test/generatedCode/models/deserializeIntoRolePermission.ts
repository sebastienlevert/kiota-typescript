import {deserializeIntoResourceAction} from './deserializeIntoResourceAction';
import {RolePermission} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRolePermission(rolePermission: RolePermission | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { rolePermission.odataType = n.getStringValue() as any ; },
        "resourceActions": n => { rolePermission.resourceActions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoResourceAction) as any ; },
    }
}
