import {DeviceGuardLocalSystemAuthorityCredentialGuardState} from './deviceGuardLocalSystemAuthorityCredentialGuardState';
import {DeviceGuardVirtualizationBasedSecurityHardwareRequirementState} from './deviceGuardVirtualizationBasedSecurityHardwareRequirementState';
import {DeviceGuardVirtualizationBasedSecurityState} from './deviceGuardVirtualizationBasedSecurityState';
import {DeviceLicensingStatus} from './deviceLicensingStatus';
import {SharedAppleDeviceUser} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface HardwareInformation extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The number of charge cycles the device’s current battery has gone through. Valid values 0 to 2147483647 */
    batteryChargeCycles?: number;
    /** The device’s current battery’s health percentage. Valid values 0 to 100 */
    batteryHealthPercentage?: number;
    /** The battery level, between 0.0 and 100, or null if the battery level cannot be determined. The update frequency of this property is per-checkin. Note this property is currently supported only on devices running iOS 5.0 and later, and is available only when Device Information access right is obtained. Valid values 0 to 100 */
    batteryLevelPercentage?: number;
    /** The serial number of the device’s current battery */
    batterySerialNumber?: string;
    /** Cellular technology of the device */
    cellularTechnology?: string;
    /** Returns the fully qualified domain name of the device (if any). If the device is not domain-joined, it returns an empty string. */
    deviceFullQualifiedDomainName?: string;
    /** The deviceGuardLocalSystemAuthorityCredentialGuardState property */
    deviceGuardLocalSystemAuthorityCredentialGuardState?: DeviceGuardLocalSystemAuthorityCredentialGuardState;
    /** The deviceGuardVirtualizationBasedSecurityHardwareRequirementState property */
    deviceGuardVirtualizationBasedSecurityHardwareRequirementState?: DeviceGuardVirtualizationBasedSecurityHardwareRequirementState;
    /** The deviceGuardVirtualizationBasedSecurityState property */
    deviceGuardVirtualizationBasedSecurityState?: DeviceGuardVirtualizationBasedSecurityState;
    /** A standard error code indicating the last error, or 0 indicating no error (default). The update frequency of this property is daily. Note this property is currently supported only for Windows based Device based subscription licensing. Valid values 0 to 2147483647 */
    deviceLicensingLastErrorCode?: number;
    /** Error text message as a descripition for deviceLicensingLastErrorCode. The update frequency of this property is daily. Note this property is currently supported only for Windows based Device based subscription licensing. */
    deviceLicensingLastErrorDescription?: string;
    /** Indicates the device licensing status after Windows device based subscription has been enabled. */
    deviceLicensingStatus?: DeviceLicensingStatus;
    /** eSIM identifier */
    esimIdentifier?: string;
    /** Free storage space of the device. */
    freeStorageSpace?: number;
    /** IMEI */
    imei?: string;
    /** IPAddressV4 */
    ipAddressV4?: string;
    /** Encryption status of the device */
    isEncrypted?: boolean;
    /** Shared iPad */
    isSharedDevice?: boolean;
    /** Supervised mode of the device */
    isSupervised?: boolean;
    /** Manufacturer of the device */
    manufacturer?: string;
    /** MEID */
    meid?: string;
    /** Model of the device */
    model?: string;
    /** String that specifies the OS edition. */
    operatingSystemEdition?: string;
    /** Operating system language of the device */
    operatingSystemLanguage?: string;
    /** Int that specifies the Windows Operating System ProductType. More details here https://go.microsoft.com/fwlink/?linkid=2126950. Valid values 0 to 2147483647 */
    operatingSystemProductType?: number;
    /** Operating System Build Number on Android device */
    osBuildNumber?: string;
    /** Phone number of the device */
    phoneNumber?: string;
    /** The product name, e.g. iPad8,12 etc. The update frequency of this property is weekly. Note this property is currently supported only on iOS/MacOS devices, and is available only when Device Information access right is obtained. */
    productName?: string;
    /** The number of users currently on this device, or null (default) if the value of this property cannot be determined. The update frequency of this property is per-checkin. Note this property is currently supported only on devices running iOS 13.4 and later, and is available only when Device Information access right is obtained. Valid values 0 to 2147483647 */
    residentUsersCount?: number;
    /** Serial number. */
    serialNumber?: string;
    /** All users on the shared Apple device */
    sharedDeviceCachedUsers?: SharedAppleDeviceUser[];
    /** SubnetAddress */
    subnetAddress?: string;
    /** Subscriber carrier of the device */
    subscriberCarrier?: string;
    /** BIOS version as reported by SMBIOS */
    systemManagementBIOSVersion?: string;
    /** Total storage space of the device. */
    totalStorageSpace?: number;
    /** The identifying information that uniquely names the TPM manufacturer */
    tpmManufacturer?: string;
    /** String that specifies the specification version. */
    tpmSpecificationVersion?: string;
    /** The version of the TPM, as specified by the manufacturer */
    tpmVersion?: string;
    /** WiFi MAC address of the device */
    wifiMac?: string;
    /** A list of wired IPv4 addresses. The update frequency (the maximum delay for the change of property value to be synchronized from the device to the cloud storage) of this property is daily. Note this property is currently supported only on devices running on Windows. */
    wiredIPv4Addresses?: string[];
}
