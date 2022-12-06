import {CrossTenantAccessPolicyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCrossTenantAccessPolicy} from './serializeCrossTenantAccessPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCrossTenantAccessPolicyCollectionResponse(writer: SerializationWriter, crossTenantAccessPolicyCollectionResponse: CrossTenantAccessPolicyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, crossTenantAccessPolicyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", crossTenantAccessPolicyCollectionResponse.value as any, serializeCrossTenantAccessPolicy);
}
