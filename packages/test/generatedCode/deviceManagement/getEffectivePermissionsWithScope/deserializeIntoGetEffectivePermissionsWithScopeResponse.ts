import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoRolePermission} from '../../models/deserializeIntoRolePermission';
import {GetEffectivePermissionsWithScopeResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetEffectivePermissionsWithScopeResponse(getEffectivePermissionsWithScopeResponse: GetEffectivePermissionsWithScopeResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getEffectivePermissionsWithScopeResponse),
        "value": n => { getEffectivePermissionsWithScopeResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRolePermission) as any ; },
    }
}
