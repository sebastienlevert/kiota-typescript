import {Organization} from './index';
import {MdmAuthority} from './mdmAuthority';
import {serializeAssignedPlan} from './serializeAssignedPlan';
import {serializeCertificateBasedAuthConfiguration} from './serializeCertificateBasedAuthConfiguration';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializeExtension} from './serializeExtension';
import {serializeOrganizationalBranding} from './serializeOrganizationalBranding';
import {serializePrivacyProfile} from './serializePrivacyProfile';
import {serializeProvisionedPlan} from './serializeProvisionedPlan';
import {serializeVerifiedDomain} from './serializeVerifiedDomain';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOrganization(writer: SerializationWriter, organization: Organization | undefined = {}) : void {
        serializeDirectoryObject(writer, organization)
            writer.writeCollectionOfObjectValuesFromMethod("assignedPlans", organization.assignedPlans as any, serializeAssignedPlan);
            writer.writeObjectValueFromMethod("branding", organization.branding as any, serializeOrganizationalBranding);
            writer.writeCollectionOfPrimitiveValues<string>("businessPhones", organization.businessPhones);
            writer.writeCollectionOfObjectValuesFromMethod("certificateBasedAuthConfiguration", organization.certificateBasedAuthConfiguration as any, serializeCertificateBasedAuthConfiguration);
            writer.writeStringValue("city", organization.city);
            writer.writeStringValue("country", organization.country);
            writer.writeStringValue("countryLetterCode", organization.countryLetterCode);
            writer.writeDateValue("createdDateTime", organization.createdDateTime);
            writer.writeStringValue("displayName", organization.displayName);
            writer.writeCollectionOfObjectValuesFromMethod("extensions", organization.extensions as any, serializeExtension);
            writer.writeCollectionOfPrimitiveValues<string>("marketingNotificationEmails", organization.marketingNotificationEmails);
            writer.writeEnumValue<MdmAuthority>("mobileDeviceManagementAuthority", organization.mobileDeviceManagementAuthority);
            writer.writeDateValue("onPremisesLastSyncDateTime", organization.onPremisesLastSyncDateTime);
            writer.writeBooleanValue("onPremisesSyncEnabled", organization.onPremisesSyncEnabled);
            writer.writeStringValue("postalCode", organization.postalCode);
            writer.writeStringValue("preferredLanguage", organization.preferredLanguage);
            writer.writeObjectValueFromMethod("privacyProfile", organization.privacyProfile as any, serializePrivacyProfile);
            writer.writeCollectionOfObjectValuesFromMethod("provisionedPlans", organization.provisionedPlans as any, serializeProvisionedPlan);
            writer.writeCollectionOfPrimitiveValues<string>("securityComplianceNotificationMails", organization.securityComplianceNotificationMails);
            writer.writeCollectionOfPrimitiveValues<string>("securityComplianceNotificationPhones", organization.securityComplianceNotificationPhones);
            writer.writeStringValue("state", organization.state);
            writer.writeStringValue("street", organization.street);
            writer.writeCollectionOfPrimitiveValues<string>("technicalNotificationMails", organization.technicalNotificationMails);
            writer.writeStringValue("tenantType", organization.tenantType);
            writer.writeCollectionOfObjectValuesFromMethod("verifiedDomains", organization.verifiedDomains as any, serializeVerifiedDomain);
}
