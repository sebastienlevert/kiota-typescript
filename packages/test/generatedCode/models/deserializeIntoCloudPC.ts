import {CloudPcDiskEncryptionState} from './cloudPcDiskEncryptionState';
import {CloudPcOperatingSystem} from './cloudPcOperatingSystem';
import {CloudPcProvisioningType} from './cloudPcProvisioningType';
import {CloudPcServicePlanType} from './cloudPcServicePlanType';
import {CloudPcStatus} from './cloudPcStatus';
import {CloudPcUserAccountType} from './cloudPcUserAccountType';
import {deserializeIntoCloudPcConnectivityResult} from './deserializeIntoCloudPcConnectivityResult';
import {deserializeIntoCloudPcLoginResult} from './deserializeIntoCloudPcLoginResult';
import {deserializeIntoCloudPcPartnerAgentInstallResult} from './deserializeIntoCloudPcPartnerAgentInstallResult';
import {deserializeIntoCloudPcRemoteActionResult} from './deserializeIntoCloudPcRemoteActionResult';
import {deserializeIntoCloudPcStatusDetails} from './deserializeIntoCloudPcStatusDetails';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {CloudPC} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCloudPC(cloudPC: CloudPC | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(cloudPC),
        "aadDeviceId": n => { cloudPC.aadDeviceId = n.getStringValue() as any ; },
        "connectivityResult": n => { cloudPC.connectivityResult = n.getObject(deserializeIntoCloudPcConnectivityResult) as any ; },
        "diskEncryptionState": n => { cloudPC.diskEncryptionState = n.getEnumValue<CloudPcDiskEncryptionState>(CloudPcDiskEncryptionState) as any ; },
        "displayName": n => { cloudPC.displayName = n.getStringValue() as any ; },
        "gracePeriodEndDateTime": n => { cloudPC.gracePeriodEndDateTime = n.getDateValue() as any ; },
        "imageDisplayName": n => { cloudPC.imageDisplayName = n.getStringValue() as any ; },
        "lastLoginResult": n => { cloudPC.lastLoginResult = n.getObject(deserializeIntoCloudPcLoginResult) as any ; },
        "lastModifiedDateTime": n => { cloudPC.lastModifiedDateTime = n.getDateValue() as any ; },
        "lastRemoteActionResult": n => { cloudPC.lastRemoteActionResult = n.getObject(deserializeIntoCloudPcRemoteActionResult) as any ; },
        "managedDeviceId": n => { cloudPC.managedDeviceId = n.getStringValue() as any ; },
        "managedDeviceName": n => { cloudPC.managedDeviceName = n.getStringValue() as any ; },
        "onPremisesConnectionName": n => { cloudPC.onPremisesConnectionName = n.getStringValue() as any ; },
        "osVersion": n => { cloudPC.osVersion = n.getEnumValue<CloudPcOperatingSystem>(CloudPcOperatingSystem) as any ; },
        "partnerAgentInstallResults": n => { cloudPC.partnerAgentInstallResults = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCloudPcPartnerAgentInstallResult) as any ; },
        "provisioningPolicyId": n => { cloudPC.provisioningPolicyId = n.getStringValue() as any ; },
        "provisioningPolicyName": n => { cloudPC.provisioningPolicyName = n.getStringValue() as any ; },
        "provisioningType": n => { cloudPC.provisioningType = n.getEnumValue<CloudPcProvisioningType>(CloudPcProvisioningType) as any ; },
        "servicePlanId": n => { cloudPC.servicePlanId = n.getStringValue() as any ; },
        "servicePlanName": n => { cloudPC.servicePlanName = n.getStringValue() as any ; },
        "servicePlanType": n => { cloudPC.servicePlanType = n.getEnumValue<CloudPcServicePlanType>(CloudPcServicePlanType) as any ; },
        "status": n => { cloudPC.status = n.getEnumValue<CloudPcStatus>(CloudPcStatus) as any ; },
        "statusDetails": n => { cloudPC.statusDetails = n.getObject(deserializeIntoCloudPcStatusDetails) as any ; },
        "userAccountType": n => { cloudPC.userAccountType = n.getEnumValue<CloudPcUserAccountType>(CloudPcUserAccountType) as any ; },
        "userPrincipalName": n => { cloudPC.userPrincipalName = n.getStringValue() as any ; },
    }
}
