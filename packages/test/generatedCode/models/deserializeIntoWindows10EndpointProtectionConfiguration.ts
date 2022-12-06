import {ApplicationGuardBlockClipboardSharingType} from './applicationGuardBlockClipboardSharingType';
import {ApplicationGuardBlockFileTransferType} from './applicationGuardBlockFileTransferType';
import {AppLockerApplicationControlType} from './appLockerApplicationControlType';
import {deserializeIntoBitLockerRemovableDrivePolicy} from './deserializeIntoBitLockerRemovableDrivePolicy';
import {deserializeIntoDeviceConfiguration} from './deserializeIntoDeviceConfiguration';
import {deserializeIntoWindowsFirewallNetworkProfile} from './deserializeIntoWindowsFirewallNetworkProfile';
import {FirewallCertificateRevocationListCheckMethodType} from './firewallCertificateRevocationListCheckMethodType';
import {FirewallPacketQueueingMethodType} from './firewallPacketQueueingMethodType';
import {FirewallPreSharedKeyEncodingMethodType} from './firewallPreSharedKeyEncodingMethodType';
import {Windows10EndpointProtectionConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10EndpointProtectionConfiguration(windows10EndpointProtectionConfiguration: Windows10EndpointProtectionConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceConfiguration(windows10EndpointProtectionConfiguration),
        "applicationGuardAllowPersistence": n => { windows10EndpointProtectionConfiguration.applicationGuardAllowPersistence = n.getBooleanValue() as any ; },
        "applicationGuardAllowPrintToLocalPrinters": n => { windows10EndpointProtectionConfiguration.applicationGuardAllowPrintToLocalPrinters = n.getBooleanValue() as any ; },
        "applicationGuardAllowPrintToNetworkPrinters": n => { windows10EndpointProtectionConfiguration.applicationGuardAllowPrintToNetworkPrinters = n.getBooleanValue() as any ; },
        "applicationGuardAllowPrintToPDF": n => { windows10EndpointProtectionConfiguration.applicationGuardAllowPrintToPDF = n.getBooleanValue() as any ; },
        "applicationGuardAllowPrintToXPS": n => { windows10EndpointProtectionConfiguration.applicationGuardAllowPrintToXPS = n.getBooleanValue() as any ; },
        "applicationGuardBlockClipboardSharing": n => { windows10EndpointProtectionConfiguration.applicationGuardBlockClipboardSharing = n.getEnumValue<ApplicationGuardBlockClipboardSharingType>(ApplicationGuardBlockClipboardSharingType) as any ; },
        "applicationGuardBlockFileTransfer": n => { windows10EndpointProtectionConfiguration.applicationGuardBlockFileTransfer = n.getEnumValue<ApplicationGuardBlockFileTransferType>(ApplicationGuardBlockFileTransferType) as any ; },
        "applicationGuardBlockNonEnterpriseContent": n => { windows10EndpointProtectionConfiguration.applicationGuardBlockNonEnterpriseContent = n.getBooleanValue() as any ; },
        "applicationGuardEnabled": n => { windows10EndpointProtectionConfiguration.applicationGuardEnabled = n.getBooleanValue() as any ; },
        "applicationGuardForceAuditing": n => { windows10EndpointProtectionConfiguration.applicationGuardForceAuditing = n.getBooleanValue() as any ; },
        "appLockerApplicationControl": n => { windows10EndpointProtectionConfiguration.appLockerApplicationControl = n.getEnumValue<AppLockerApplicationControlType>(AppLockerApplicationControlType) as any ; },
        "bitLockerDisableWarningForOtherDiskEncryption": n => { windows10EndpointProtectionConfiguration.bitLockerDisableWarningForOtherDiskEncryption = n.getBooleanValue() as any ; },
        "bitLockerEnableStorageCardEncryptionOnMobile": n => { windows10EndpointProtectionConfiguration.bitLockerEnableStorageCardEncryptionOnMobile = n.getBooleanValue() as any ; },
        "bitLockerEncryptDevice": n => { windows10EndpointProtectionConfiguration.bitLockerEncryptDevice = n.getBooleanValue() as any ; },
        "bitLockerRemovableDrivePolicy": n => { windows10EndpointProtectionConfiguration.bitLockerRemovableDrivePolicy = n.getObject(deserializeIntoBitLockerRemovableDrivePolicy) as any ; },
        "defenderAdditionalGuardedFolders": n => { windows10EndpointProtectionConfiguration.defenderAdditionalGuardedFolders = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "defenderAttackSurfaceReductionExcludedPaths": n => { windows10EndpointProtectionConfiguration.defenderAttackSurfaceReductionExcludedPaths = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "defenderExploitProtectionXml": n => { windows10EndpointProtectionConfiguration.defenderExploitProtectionXml = n.getStringValue() as any ; },
        "defenderExploitProtectionXmlFileName": n => { windows10EndpointProtectionConfiguration.defenderExploitProtectionXmlFileName = n.getStringValue() as any ; },
        "defenderGuardedFoldersAllowedAppPaths": n => { windows10EndpointProtectionConfiguration.defenderGuardedFoldersAllowedAppPaths = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "defenderSecurityCenterBlockExploitProtectionOverride": n => { windows10EndpointProtectionConfiguration.defenderSecurityCenterBlockExploitProtectionOverride = n.getBooleanValue() as any ; },
        "firewallBlockStatefulFTP": n => { windows10EndpointProtectionConfiguration.firewallBlockStatefulFTP = n.getBooleanValue() as any ; },
        "firewallCertificateRevocationListCheckMethod": n => { windows10EndpointProtectionConfiguration.firewallCertificateRevocationListCheckMethod = n.getEnumValue<FirewallCertificateRevocationListCheckMethodType>(FirewallCertificateRevocationListCheckMethodType) as any ; },
        "firewallIdleTimeoutForSecurityAssociationInSeconds": n => { windows10EndpointProtectionConfiguration.firewallIdleTimeoutForSecurityAssociationInSeconds = n.getNumberValue() as any ; },
        "firewallIPSecExemptionsAllowDHCP": n => { windows10EndpointProtectionConfiguration.firewallIPSecExemptionsAllowDHCP = n.getBooleanValue() as any ; },
        "firewallIPSecExemptionsAllowICMP": n => { windows10EndpointProtectionConfiguration.firewallIPSecExemptionsAllowICMP = n.getBooleanValue() as any ; },
        "firewallIPSecExemptionsAllowNeighborDiscovery": n => { windows10EndpointProtectionConfiguration.firewallIPSecExemptionsAllowNeighborDiscovery = n.getBooleanValue() as any ; },
        "firewallIPSecExemptionsAllowRouterDiscovery": n => { windows10EndpointProtectionConfiguration.firewallIPSecExemptionsAllowRouterDiscovery = n.getBooleanValue() as any ; },
        "firewallMergeKeyingModuleSettings": n => { windows10EndpointProtectionConfiguration.firewallMergeKeyingModuleSettings = n.getBooleanValue() as any ; },
        "firewallPacketQueueingMethod": n => { windows10EndpointProtectionConfiguration.firewallPacketQueueingMethod = n.getEnumValue<FirewallPacketQueueingMethodType>(FirewallPacketQueueingMethodType) as any ; },
        "firewallPreSharedKeyEncodingMethod": n => { windows10EndpointProtectionConfiguration.firewallPreSharedKeyEncodingMethod = n.getEnumValue<FirewallPreSharedKeyEncodingMethodType>(FirewallPreSharedKeyEncodingMethodType) as any ; },
        "firewallProfileDomain": n => { windows10EndpointProtectionConfiguration.firewallProfileDomain = n.getObject(deserializeIntoWindowsFirewallNetworkProfile) as any ; },
        "firewallProfilePrivate": n => { windows10EndpointProtectionConfiguration.firewallProfilePrivate = n.getObject(deserializeIntoWindowsFirewallNetworkProfile) as any ; },
        "firewallProfilePublic": n => { windows10EndpointProtectionConfiguration.firewallProfilePublic = n.getObject(deserializeIntoWindowsFirewallNetworkProfile) as any ; },
        "smartScreenBlockOverrideForFiles": n => { windows10EndpointProtectionConfiguration.smartScreenBlockOverrideForFiles = n.getBooleanValue() as any ; },
        "smartScreenEnableInShell": n => { windows10EndpointProtectionConfiguration.smartScreenEnableInShell = n.getBooleanValue() as any ; },
    }
}
