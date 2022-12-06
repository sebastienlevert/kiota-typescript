import {deserializeIntoManagedAppPolicy} from './deserializeIntoManagedAppPolicy';
import {ManagedAppProtection} from './index';
import {ManagedAppClipboardSharingLevel} from './managedAppClipboardSharingLevel';
import {ManagedAppDataStorageLocation} from './managedAppDataStorageLocation';
import {ManagedAppDataTransferLevel} from './managedAppDataTransferLevel';
import {ManagedAppPinCharacterSet} from './managedAppPinCharacterSet';
import {ManagedBrowserType} from './managedBrowserType';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoManagedAppProtection(managedAppProtection: ManagedAppProtection | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoManagedAppPolicy(managedAppProtection),
        "allowedDataStorageLocations": n => { managedAppProtection.allowedDataStorageLocations = n.getEnumValues<ManagedAppDataStorageLocation>(ManagedAppDataStorageLocation) as any ; },
        "allowedInboundDataTransferSources": n => { managedAppProtection.allowedInboundDataTransferSources = n.getEnumValue<ManagedAppDataTransferLevel>(ManagedAppDataTransferLevel) as any ; },
        "allowedOutboundClipboardSharingLevel": n => { managedAppProtection.allowedOutboundClipboardSharingLevel = n.getEnumValue<ManagedAppClipboardSharingLevel>(ManagedAppClipboardSharingLevel) as any ; },
        "allowedOutboundDataTransferDestinations": n => { managedAppProtection.allowedOutboundDataTransferDestinations = n.getEnumValue<ManagedAppDataTransferLevel>(ManagedAppDataTransferLevel) as any ; },
        "contactSyncBlocked": n => { managedAppProtection.contactSyncBlocked = n.getBooleanValue() as any ; },
        "dataBackupBlocked": n => { managedAppProtection.dataBackupBlocked = n.getBooleanValue() as any ; },
        "deviceComplianceRequired": n => { managedAppProtection.deviceComplianceRequired = n.getBooleanValue() as any ; },
        "disableAppPinIfDevicePinIsSet": n => { managedAppProtection.disableAppPinIfDevicePinIsSet = n.getBooleanValue() as any ; },
        "fingerprintBlocked": n => { managedAppProtection.fingerprintBlocked = n.getBooleanValue() as any ; },
        "managedBrowser": n => { managedAppProtection.managedBrowser = n.getEnumValue<ManagedBrowserType>(ManagedBrowserType) as any ; },
        "managedBrowserToOpenLinksRequired": n => { managedAppProtection.managedBrowserToOpenLinksRequired = n.getBooleanValue() as any ; },
        "maximumPinRetries": n => { managedAppProtection.maximumPinRetries = n.getNumberValue() as any ; },
        "minimumPinLength": n => { managedAppProtection.minimumPinLength = n.getNumberValue() as any ; },
        "minimumRequiredAppVersion": n => { managedAppProtection.minimumRequiredAppVersion = n.getStringValue() as any ; },
        "minimumRequiredOsVersion": n => { managedAppProtection.minimumRequiredOsVersion = n.getStringValue() as any ; },
        "minimumWarningAppVersion": n => { managedAppProtection.minimumWarningAppVersion = n.getStringValue() as any ; },
        "minimumWarningOsVersion": n => { managedAppProtection.minimumWarningOsVersion = n.getStringValue() as any ; },
        "organizationalCredentialsRequired": n => { managedAppProtection.organizationalCredentialsRequired = n.getBooleanValue() as any ; },
        "periodBeforePinReset": n => { managedAppProtection.periodBeforePinReset = n.getDurationValue() as any ; },
        "periodOfflineBeforeAccessCheck": n => { managedAppProtection.periodOfflineBeforeAccessCheck = n.getDurationValue() as any ; },
        "periodOfflineBeforeWipeIsEnforced": n => { managedAppProtection.periodOfflineBeforeWipeIsEnforced = n.getDurationValue() as any ; },
        "periodOnlineBeforeAccessCheck": n => { managedAppProtection.periodOnlineBeforeAccessCheck = n.getDurationValue() as any ; },
        "pinCharacterSet": n => { managedAppProtection.pinCharacterSet = n.getEnumValue<ManagedAppPinCharacterSet>(ManagedAppPinCharacterSet) as any ; },
        "pinRequired": n => { managedAppProtection.pinRequired = n.getBooleanValue() as any ; },
        "printBlocked": n => { managedAppProtection.printBlocked = n.getBooleanValue() as any ; },
        "saveAsBlocked": n => { managedAppProtection.saveAsBlocked = n.getBooleanValue() as any ; },
        "simplePinBlocked": n => { managedAppProtection.simplePinBlocked = n.getBooleanValue() as any ; },
    }
}
