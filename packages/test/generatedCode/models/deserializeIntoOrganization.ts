import {deserializeIntoAssignedPlan} from './deserializeIntoAssignedPlan';
import {deserializeIntoCertificateBasedAuthConfiguration} from './deserializeIntoCertificateBasedAuthConfiguration';
import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {deserializeIntoExtension} from './deserializeIntoExtension';
import {deserializeIntoOrganizationalBranding} from './deserializeIntoOrganizationalBranding';
import {deserializeIntoPrivacyProfile} from './deserializeIntoPrivacyProfile';
import {deserializeIntoProvisionedPlan} from './deserializeIntoProvisionedPlan';
import {deserializeIntoVerifiedDomain} from './deserializeIntoVerifiedDomain';
import {Organization} from './index';
import {MdmAuthority} from './mdmAuthority';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOrganization(organization: Organization | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(organization),
        "assignedPlans": n => { organization.assignedPlans = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAssignedPlan) as any ; },
        "branding": n => { organization.branding = n.getObject(deserializeIntoOrganizationalBranding) as any ; },
        "businessPhones": n => { organization.businessPhones = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "certificateBasedAuthConfiguration": n => { organization.certificateBasedAuthConfiguration = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCertificateBasedAuthConfiguration) as any ; },
        "city": n => { organization.city = n.getStringValue() as any ; },
        "country": n => { organization.country = n.getStringValue() as any ; },
        "countryLetterCode": n => { organization.countryLetterCode = n.getStringValue() as any ; },
        "createdDateTime": n => { organization.createdDateTime = n.getDateValue() as any ; },
        "displayName": n => { organization.displayName = n.getStringValue() as any ; },
        "extensions": n => { organization.extensions = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExtension) as any ; },
        "marketingNotificationEmails": n => { organization.marketingNotificationEmails = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "mobileDeviceManagementAuthority": n => { organization.mobileDeviceManagementAuthority = n.getEnumValue<MdmAuthority>(MdmAuthority) as any ; },
        "onPremisesLastSyncDateTime": n => { organization.onPremisesLastSyncDateTime = n.getDateValue() as any ; },
        "onPremisesSyncEnabled": n => { organization.onPremisesSyncEnabled = n.getBooleanValue() as any ; },
        "postalCode": n => { organization.postalCode = n.getStringValue() as any ; },
        "preferredLanguage": n => { organization.preferredLanguage = n.getStringValue() as any ; },
        "privacyProfile": n => { organization.privacyProfile = n.getObject(deserializeIntoPrivacyProfile) as any ; },
        "provisionedPlans": n => { organization.provisionedPlans = n.getCollectionOfObjectValuesFromMethod(deserializeIntoProvisionedPlan) as any ; },
        "securityComplianceNotificationMails": n => { organization.securityComplianceNotificationMails = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "securityComplianceNotificationPhones": n => { organization.securityComplianceNotificationPhones = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "state": n => { organization.state = n.getStringValue() as any ; },
        "street": n => { organization.street = n.getStringValue() as any ; },
        "technicalNotificationMails": n => { organization.technicalNotificationMails = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "tenantType": n => { organization.tenantType = n.getStringValue() as any ; },
        "verifiedDomains": n => { organization.verifiedDomains = n.getCollectionOfObjectValuesFromMethod(deserializeIntoVerifiedDomain) as any ; },
    }
}
