import {deserializeIntoComplianceManagementPartnerAssignment} from './deserializeIntoComplianceManagementPartnerAssignment';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DeviceManagementPartnerTenantState} from './deviceManagementPartnerTenantState';
import {ComplianceManagementPartner} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoComplianceManagementPartner(complianceManagementPartner: ComplianceManagementPartner | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(complianceManagementPartner),
        "androidEnrollmentAssignments": n => { complianceManagementPartner.androidEnrollmentAssignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoComplianceManagementPartnerAssignment) as any ; },
        "androidOnboarded": n => { complianceManagementPartner.androidOnboarded = n.getBooleanValue() as any ; },
        "displayName": n => { complianceManagementPartner.displayName = n.getStringValue() as any ; },
        "iosEnrollmentAssignments": n => { complianceManagementPartner.iosEnrollmentAssignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoComplianceManagementPartnerAssignment) as any ; },
        "iosOnboarded": n => { complianceManagementPartner.iosOnboarded = n.getBooleanValue() as any ; },
        "lastHeartbeatDateTime": n => { complianceManagementPartner.lastHeartbeatDateTime = n.getDateValue() as any ; },
        "macOsEnrollmentAssignments": n => { complianceManagementPartner.macOsEnrollmentAssignments = n.getCollectionOfObjectValuesFromMethod(deserializeIntoComplianceManagementPartnerAssignment) as any ; },
        "macOsOnboarded": n => { complianceManagementPartner.macOsOnboarded = n.getBooleanValue() as any ; },
        "partnerState": n => { complianceManagementPartner.partnerState = n.getEnumValue<DeviceManagementPartnerTenantState>(DeviceManagementPartnerTenantState) as any ; },
    }
}
