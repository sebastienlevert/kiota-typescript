import {CloudPcDiskEncryptionState} from './cloudPcDiskEncryptionState';
import {CloudPcOperatingSystem} from './cloudPcOperatingSystem';
import {CloudPcProvisioningType} from './cloudPcProvisioningType';
import {CloudPcServicePlanType} from './cloudPcServicePlanType';
import {CloudPcStatus} from './cloudPcStatus';
import {CloudPcUserAccountType} from './cloudPcUserAccountType';
import {CloudPcConnectivityResult, CloudPcLoginResult, CloudPcPartnerAgentInstallResult, CloudPcRemoteActionResult, CloudPcStatusDetails, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CloudPC extends Entity, Partial<Parsable> {
    /** The Azure Active Directory (Azure AD) device ID of the Cloud PC. */
    aadDeviceId?: string;
    /** The connectivityResult property */
    connectivityResult?: CloudPcConnectivityResult;
    /** The diskEncryptionState property */
    diskEncryptionState?: CloudPcDiskEncryptionState;
    /** The display name of the Cloud PC. */
    displayName?: string;
    /** The date and time when the grace period ends and reprovisioning/deprovisioning happens. Required only if the status is inGracePeriod. The timestamp is shown in ISO 8601 format and Coordinated Universal Time (UTC). For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    gracePeriodEndDateTime?: Date;
    /** Name of the OS image that's on the Cloud PC. */
    imageDisplayName?: string;
    /** The lastLoginResult property */
    lastLoginResult?: CloudPcLoginResult;
    /** The last modified date and time of the Cloud PC. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    lastModifiedDateTime?: Date;
    /** The lastRemoteActionResult property */
    lastRemoteActionResult?: CloudPcRemoteActionResult;
    /** The Intune device ID of the Cloud PC. */
    managedDeviceId?: string;
    /** The Intune device name of the Cloud PC. */
    managedDeviceName?: string;
    /** The Azure network connection that is applied during the provisioning of Cloud PCs. */
    onPremisesConnectionName?: string;
    /** The osVersion property */
    osVersion?: CloudPcOperatingSystem;
    /** The partnerAgentInstallResults property */
    partnerAgentInstallResults?: CloudPcPartnerAgentInstallResult[];
    /** The provisioning policy ID of the Cloud PC. */
    provisioningPolicyId?: string;
    /** The provisioning policy that is applied during the provisioning of Cloud PCs. */
    provisioningPolicyName?: string;
    /** The provisioningType property */
    provisioningType?: CloudPcProvisioningType;
    /** The service plan ID of the Cloud PC. */
    servicePlanId?: string;
    /** The service plan name of the Cloud PC. */
    servicePlanName?: string;
    /** The servicePlanType property */
    servicePlanType?: CloudPcServicePlanType;
    /** The status property */
    status?: CloudPcStatus;
    /** The statusDetails property */
    statusDetails?: CloudPcStatusDetails;
    /** The userAccountType property */
    userAccountType?: CloudPcUserAccountType;
    /** The user principal name (UPN) of the user assigned to the Cloud PC. */
    userPrincipalName?: string;
}
