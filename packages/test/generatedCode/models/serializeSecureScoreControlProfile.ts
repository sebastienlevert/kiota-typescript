import {SecureScoreControlProfile} from './index';
import {serializeComplianceInformation} from './serializeComplianceInformation';
import {serializeEntity} from './serializeEntity';
import {serializeSecureScoreControlStateUpdate} from './serializeSecureScoreControlStateUpdate';
import {serializeSecurityVendorInformation} from './serializeSecurityVendorInformation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecureScoreControlProfile(writer: SerializationWriter, secureScoreControlProfile: SecureScoreControlProfile | undefined = {}) : void {
        serializeEntity(writer, secureScoreControlProfile)
            writer.writeStringValue("actionType", secureScoreControlProfile.actionType);
            writer.writeStringValue("actionUrl", secureScoreControlProfile.actionUrl);
            writer.writeStringValue("azureTenantId", secureScoreControlProfile.azureTenantId);
            writer.writeCollectionOfObjectValuesFromMethod("complianceInformation", secureScoreControlProfile.complianceInformation as any, serializeComplianceInformation);
            writer.writeStringValue("controlCategory", secureScoreControlProfile.controlCategory);
            writer.writeCollectionOfObjectValuesFromMethod("controlStateUpdates", secureScoreControlProfile.controlStateUpdates as any, serializeSecureScoreControlStateUpdate);
            writer.writeBooleanValue("deprecated", secureScoreControlProfile.deprecated);
            writer.writeStringValue("implementationCost", secureScoreControlProfile.implementationCost);
            writer.writeDateValue("lastModifiedDateTime", secureScoreControlProfile.lastModifiedDateTime);
            writer.writeNumberValue("maxScore", secureScoreControlProfile.maxScore);
            writer.writeNumberValue("rank", secureScoreControlProfile.rank);
            writer.writeStringValue("remediation", secureScoreControlProfile.remediation);
            writer.writeStringValue("remediationImpact", secureScoreControlProfile.remediationImpact);
            writer.writeStringValue("service", secureScoreControlProfile.service);
            writer.writeCollectionOfPrimitiveValues<string>("threats", secureScoreControlProfile.threats);
            writer.writeStringValue("tier", secureScoreControlProfile.tier);
            writer.writeStringValue("title", secureScoreControlProfile.title);
            writer.writeStringValue("userImpact", secureScoreControlProfile.userImpact);
            writer.writeObjectValueFromMethod("vendorInformation", secureScoreControlProfile.vendorInformation as any, serializeSecurityVendorInformation);
}
