import {ComplianceManagementPartnerAssignmentCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeComplianceManagementPartnerAssignment} from './serializeComplianceManagementPartnerAssignment';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeComplianceManagementPartnerAssignmentCollectionResponse(writer: SerializationWriter, complianceManagementPartnerAssignmentCollectionResponse: ComplianceManagementPartnerAssignmentCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, complianceManagementPartnerAssignmentCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", complianceManagementPartnerAssignmentCollectionResponse.value as any, serializeComplianceManagementPartnerAssignment);
}
