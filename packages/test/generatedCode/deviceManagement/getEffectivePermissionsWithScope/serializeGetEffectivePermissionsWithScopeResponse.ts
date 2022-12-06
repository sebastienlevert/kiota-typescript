import {serializeBaseCollectionPaginationCountResponse} from '../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeRolePermission} from '../../models/serializeRolePermission';
import {GetEffectivePermissionsWithScopeResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetEffectivePermissionsWithScopeResponse(writer: SerializationWriter, getEffectivePermissionsWithScopeResponse: GetEffectivePermissionsWithScopeResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getEffectivePermissionsWithScopeResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getEffectivePermissionsWithScopeResponse.value as any, serializeRolePermission);
}
