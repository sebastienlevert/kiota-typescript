import {UnifiedRolePermission} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnifiedRolePermission(unifiedRolePermission: UnifiedRolePermission | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "allowedResourceActions": n => { unifiedRolePermission.allowedResourceActions = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "condition": n => { unifiedRolePermission.condition = n.getStringValue() as any ; },
        "excludedResourceActions": n => { unifiedRolePermission.excludedResourceActions = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "@odata.type": n => { unifiedRolePermission.odataType = n.getStringValue() as any ; },
    }
}
