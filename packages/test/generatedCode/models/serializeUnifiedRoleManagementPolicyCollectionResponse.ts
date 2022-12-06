import {UnifiedRoleManagementPolicyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUnifiedRoleManagementPolicy} from './serializeUnifiedRoleManagementPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUnifiedRoleManagementPolicyCollectionResponse(writer: SerializationWriter, unifiedRoleManagementPolicyCollectionResponse: UnifiedRoleManagementPolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, unifiedRoleManagementPolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", unifiedRoleManagementPolicyCollectionResponse.value as any, serializeUnifiedRoleManagementPolicy);
}
