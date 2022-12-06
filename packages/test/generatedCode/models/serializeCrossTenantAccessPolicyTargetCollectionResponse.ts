import {CrossTenantAccessPolicyTargetCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCrossTenantAccessPolicyTarget} from './serializeCrossTenantAccessPolicyTarget';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCrossTenantAccessPolicyTargetCollectionResponse(writer: SerializationWriter, crossTenantAccessPolicyTargetCollectionResponse: CrossTenantAccessPolicyTargetCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, crossTenantAccessPolicyTargetCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", crossTenantAccessPolicyTargetCollectionResponse.value as any, serializeCrossTenantAccessPolicyTarget);
}
