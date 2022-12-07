import {deserializeIntoSharedAppleDeviceUser} from './deserializeIntoSharedAppleDeviceUser';
import {DeviceGuardLocalSystemAuthorityCredentialGuardState} from './deviceGuardLocalSystemAuthorityCredentialGuardState';
import {DeviceGuardVirtualizationBasedSecurityHardwareRequirementState} from './deviceGuardVirtualizationBasedSecurityHardwareRequirementState';
import {DeviceGuardVirtualizationBasedSecurityState} from './deviceGuardVirtualizationBasedSecurityState';
import {DeviceLicensingStatus} from './deviceLicensingStatus';
import {HardwareInformation} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHardwareInformation(hardwareInformation: HardwareInformation | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "batteryChargeCycles": n => { hardwareInformation.batteryChargeCycles = n.getNumberValue() as any ; },
        "batteryHealthPercentage": n => { hardwareInformation.batteryHealthPercentage = n.getNumberValue() as any ; },
        "batteryLevelPercentage": n => { hardwareInformation.batteryLevelPercentage = n.getNumberValue() as any ; },
        "batterySerialNumber": n => { hardwareInformation.batterySerialNumber = n.getStringValue() as any ; },
        "cellularTechnology": n => { hardwareInformation.cellularTechnology = n.getStringValue() as any ; },
        "deviceFullQualifiedDomainName": n => { hardwareInformation.deviceFullQualifiedDomainName = n.getStringValue() as any ; },
        "deviceGuardLocalSystemAuthorityCredentialGuardState": n => { hardwareInformation.deviceGuardLocalSystemAuthorityCredentialGuardState = n.getEnumValue<DeviceGuardLocalSystemAuthorityCredentialGuardState>(DeviceGuardLocalSystemAuthorityCredentialGuardState) as any ; },
        "deviceGuardVirtualizationBasedSecurityHardwareRequirementState": n => { hardwareInformation.deviceGuardVirtualizationBasedSecurityHardwareRequirementState = n.getEnumValue<DeviceGuardVirtualizationBasedSecurityHardwareRequirementState>(DeviceGuardVirtualizationBasedSecurityHardwareRequirementState) as any ; },
        "deviceGuardVirtualizationBasedSecurityState": n => { hardwareInformation.deviceGuardVirtualizationBasedSecurityState = n.getEnumValue<DeviceGuardVirtualizationBasedSecurityState>(DeviceGuardVirtualizationBasedSecurityState) as any ; },
        "deviceLicensingLastErrorCode": n => { hardwareInformation.deviceLicensingLastErrorCode = n.getNumberValue() as any ; },
        "deviceLicensingLastErrorDescription": n => { hardwareInformation.deviceLicensingLastErrorDescription = n.getStringValue() as any ; },
        "deviceLicensingStatus": n => { hardwareInformation.deviceLicensingStatus = n.getEnumValue<DeviceLicensingStatus>(DeviceLicensingStatus) as any ; },
        "esimIdentifier": n => { hardwareInformation.esimIdentifier = n.getStringValue() as any ; },
        "freeStorageSpace": n => { hardwareInformation.freeStorageSpace = n.getNumberValue() as any ; },
        "imei": n => { hardwareInformation.imei = n.getStringValue() as any ; },
        "ipAddressV4": n => { hardwareInformation.ipAddressV4 = n.getStringValue() as any ; },
        "isEncrypted": n => { hardwareInformation.isEncrypted = n.getBooleanValue() as any ; },
        "isSharedDevice": n => { hardwareInformation.isSharedDevice = n.getBooleanValue() as any ; },
        "isSupervised": n => { hardwareInformation.isSupervised = n.getBooleanValue() as any ; },
        "manufacturer": n => { hardwareInformation.manufacturer = n.getStringValue() as any ; },
        "meid": n => { hardwareInformation.meid = n.getStringValue() as any ; },
        "model": n => { hardwareInformation.model = n.getStringValue() as any ; },
        "operatingSystemEdition": n => { hardwareInformation.operatingSystemEdition = n.getStringValue() as any ; },
        "operatingSystemLanguage": n => { hardwareInformation.operatingSystemLanguage = n.getStringValue() as any ; },
        "operatingSystemProductType": n => { hardwareInformation.operatingSystemProductType = n.getNumberValue() as any ; },
        "osBuildNumber": n => { hardwareInformation.osBuildNumber = n.getStringValue() as any ; },
        "phoneNumber": n => { hardwareInformation.phoneNumber = n.getStringValue() as any ; },
        "productName": n => { hardwareInformation.productName = n.getStringValue() as any ; },
        "residentUsersCount": n => { hardwareInformation.residentUsersCount = n.getNumberValue() as any ; },
        "serialNumber": n => { hardwareInformation.serialNumber = n.getStringValue() as any ; },
        "sharedDeviceCachedUsers": n => { hardwareInformation.sharedDeviceCachedUsers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSharedAppleDeviceUser) as any ; },
        "subnetAddress": n => { hardwareInformation.subnetAddress = n.getStringValue() as any ; },
        "subscriberCarrier": n => { hardwareInformation.subscriberCarrier = n.getStringValue() as any ; },
        "systemManagementBIOSVersion": n => { hardwareInformation.systemManagementBIOSVersion = n.getStringValue() as any ; },
        "totalStorageSpace": n => { hardwareInformation.totalStorageSpace = n.getNumberValue() as any ; },
        "tpmManufacturer": n => { hardwareInformation.tpmManufacturer = n.getStringValue() as any ; },
        "tpmSpecificationVersion": n => { hardwareInformation.tpmSpecificationVersion = n.getStringValue() as any ; },
        "tpmVersion": n => { hardwareInformation.tpmVersion = n.getStringValue() as any ; },
        "wifiMac": n => { hardwareInformation.wifiMac = n.getStringValue() as any ; },
        "wiredIPv4Addresses": n => { hardwareInformation.wiredIPv4Addresses = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
