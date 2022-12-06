import {ComplianceManagementPartnerCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeComplianceManagementPartner} from './serializeComplianceManagementPartner';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeComplianceManagementPartnerCollectionResponse(writer: SerializationWriter, complianceManagementPartnerCollectionResponse: ComplianceManagementPartnerCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, complianceManagementPartnerCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", complianceManagementPartnerCollectionResponse.value as any, serializeComplianceManagementPartner);
}
