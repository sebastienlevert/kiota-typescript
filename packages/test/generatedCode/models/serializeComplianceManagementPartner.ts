import {DeviceManagementPartnerTenantState} from './deviceManagementPartnerTenantState';
import {ComplianceManagementPartner} from './index';
import {serializeComplianceManagementPartnerAssignment} from './serializeComplianceManagementPartnerAssignment';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeComplianceManagementPartner(writer: SerializationWriter, complianceManagementPartner: ComplianceManagementPartner | undefined = {}) : void {
        serializeEntity(writer, complianceManagementPartner)
            writer.writeCollectionOfObjectValuesFromMethod("androidEnrollmentAssignments", complianceManagementPartner.androidEnrollmentAssignments as any, serializeComplianceManagementPartnerAssignment);
            writer.writeBooleanValue("androidOnboarded", complianceManagementPartner.androidOnboarded);
            writer.writeStringValue("displayName", complianceManagementPartner.displayName);
            writer.writeCollectionOfObjectValuesFromMethod("iosEnrollmentAssignments", complianceManagementPartner.iosEnrollmentAssignments as any, serializeComplianceManagementPartnerAssignment);
            writer.writeBooleanValue("iosOnboarded", complianceManagementPartner.iosOnboarded);
            writer.writeDateValue("lastHeartbeatDateTime", complianceManagementPartner.lastHeartbeatDateTime);
            writer.writeCollectionOfObjectValuesFromMethod("macOsEnrollmentAssignments", complianceManagementPartner.macOsEnrollmentAssignments as any, serializeComplianceManagementPartnerAssignment);
            writer.writeBooleanValue("macOsOnboarded", complianceManagementPartner.macOsOnboarded);
            writer.writeEnumValue<DeviceManagementPartnerTenantState>("partnerState", complianceManagementPartner.partnerState);
}
