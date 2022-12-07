import {CloudPcDiskEncryptionState} from './cloudPcDiskEncryptionState';
import {CloudPcOperatingSystem} from './cloudPcOperatingSystem';
import {CloudPcProvisioningType} from './cloudPcProvisioningType';
import {CloudPcServicePlanType} from './cloudPcServicePlanType';
import {CloudPcStatus} from './cloudPcStatus';
import {CloudPcUserAccountType} from './cloudPcUserAccountType';
import {CloudPC} from './index';
import {serializeCloudPcConnectivityResult} from './serializeCloudPcConnectivityResult';
import {serializeCloudPcLoginResult} from './serializeCloudPcLoginResult';
import {serializeCloudPcPartnerAgentInstallResult} from './serializeCloudPcPartnerAgentInstallResult';
import {serializeCloudPcRemoteActionResult} from './serializeCloudPcRemoteActionResult';
import {serializeCloudPcStatusDetails} from './serializeCloudPcStatusDetails';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCloudPC(writer: SerializationWriter, cloudPC: CloudPC | undefined = {}) : void {
        serializeEntity(writer, cloudPC)
            writer.writeStringValue("aadDeviceId", cloudPC.aadDeviceId);
            writer.writeObjectValueFromMethod("connectivityResult", cloudPC.connectivityResult as any, serializeCloudPcConnectivityResult);
            writer.writeEnumValue<CloudPcDiskEncryptionState>("diskEncryptionState", cloudPC.diskEncryptionState);
            writer.writeStringValue("displayName", cloudPC.displayName);
            writer.writeDateValue("gracePeriodEndDateTime", cloudPC.gracePeriodEndDateTime);
            writer.writeStringValue("imageDisplayName", cloudPC.imageDisplayName);
            writer.writeObjectValueFromMethod("lastLoginResult", cloudPC.lastLoginResult as any, serializeCloudPcLoginResult);
            writer.writeDateValue("lastModifiedDateTime", cloudPC.lastModifiedDateTime);
            writer.writeObjectValueFromMethod("lastRemoteActionResult", cloudPC.lastRemoteActionResult as any, serializeCloudPcRemoteActionResult);
            writer.writeStringValue("managedDeviceId", cloudPC.managedDeviceId);
            writer.writeStringValue("managedDeviceName", cloudPC.managedDeviceName);
            writer.writeStringValue("onPremisesConnectionName", cloudPC.onPremisesConnectionName);
            writer.writeEnumValue<CloudPcOperatingSystem>("osVersion", cloudPC.osVersion);
            writer.writeCollectionOfObjectValuesFromMethod("partnerAgentInstallResults", cloudPC.partnerAgentInstallResults as any, serializeCloudPcPartnerAgentInstallResult);
            writer.writeStringValue("provisioningPolicyId", cloudPC.provisioningPolicyId);
            writer.writeStringValue("provisioningPolicyName", cloudPC.provisioningPolicyName);
            writer.writeEnumValue<CloudPcProvisioningType>("provisioningType", cloudPC.provisioningType);
            writer.writeStringValue("servicePlanId", cloudPC.servicePlanId);
            writer.writeStringValue("servicePlanName", cloudPC.servicePlanName);
            writer.writeEnumValue<CloudPcServicePlanType>("servicePlanType", cloudPC.servicePlanType);
            writer.writeEnumValue<CloudPcStatus>("status", cloudPC.status);
            writer.writeObjectValueFromMethod("statusDetails", cloudPC.statusDetails as any, serializeCloudPcStatusDetails);
            writer.writeEnumValue<CloudPcUserAccountType>("userAccountType", cloudPC.userAccountType);
            writer.writeStringValue("userPrincipalName", cloudPC.userPrincipalName);
}
