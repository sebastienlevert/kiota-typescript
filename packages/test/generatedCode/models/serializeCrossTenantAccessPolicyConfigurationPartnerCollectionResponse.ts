import {CrossTenantAccessPolicyConfigurationPartnerCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCrossTenantAccessPolicyConfigurationPartner} from './serializeCrossTenantAccessPolicyConfigurationPartner';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCrossTenantAccessPolicyConfigurationPartnerCollectionResponse(writer: SerializationWriter, crossTenantAccessPolicyConfigurationPartnerCollectionResponse: CrossTenantAccessPolicyConfigurationPartnerCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, crossTenantAccessPolicyConfigurationPartnerCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", crossTenantAccessPolicyConfigurationPartnerCollectionResponse.value as any, serializeCrossTenantAccessPolicyConfigurationPartner);
}
