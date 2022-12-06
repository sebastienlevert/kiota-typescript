import {ApplicationGuardBlockClipboardSharingType} from './applicationGuardBlockClipboardSharingType';
import {ApplicationGuardBlockFileTransferType} from './applicationGuardBlockFileTransferType';
import {AppLockerApplicationControlType} from './appLockerApplicationControlType';
import {FirewallCertificateRevocationListCheckMethodType} from './firewallCertificateRevocationListCheckMethodType';
import {FirewallPacketQueueingMethodType} from './firewallPacketQueueingMethodType';
import {FirewallPreSharedKeyEncodingMethodType} from './firewallPreSharedKeyEncodingMethodType';
import {BitLockerRemovableDrivePolicy, DeviceConfiguration, WindowsFirewallNetworkProfile} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Windows10EndpointProtectionConfiguration extends DeviceConfiguration, Partial<Parsable> {
    /** Allow persisting user generated data inside the App Guard Containter (favorites, cookies, web passwords, etc.) */
    applicationGuardAllowPersistence?: boolean;
    /** Allow printing to Local Printers from Container */
    applicationGuardAllowPrintToLocalPrinters?: boolean;
    /** Allow printing to Network Printers from Container */
    applicationGuardAllowPrintToNetworkPrinters?: boolean;
    /** Allow printing to PDF from Container */
    applicationGuardAllowPrintToPDF?: boolean;
    /** Allow printing to XPS from Container */
    applicationGuardAllowPrintToXPS?: boolean;
    /** Possible values for applicationGuardBlockClipboardSharingType */
    applicationGuardBlockClipboardSharing?: ApplicationGuardBlockClipboardSharingType;
    /** Possible values for applicationGuardBlockFileTransfer */
    applicationGuardBlockFileTransfer?: ApplicationGuardBlockFileTransferType;
    /** Block enterprise sites to load non-enterprise content, such as third party plug-ins */
    applicationGuardBlockNonEnterpriseContent?: boolean;
    /** Enable Windows Defender Application Guard */
    applicationGuardEnabled?: boolean;
    /** Force auditing will persist Windows logs and events to meet security/compliance criteria (sample events are user login-logoff, use of privilege rights, software installation, system changes, etc.) */
    applicationGuardForceAuditing?: boolean;
    /** Possible values of AppLocker Application Control Types */
    appLockerApplicationControl?: AppLockerApplicationControlType;
    /** Allows the Admin to disable the warning prompt for other disk encryption on the user machines. */
    bitLockerDisableWarningForOtherDiskEncryption?: boolean;
    /** Allows the admin to require encryption to be turned on using BitLocker. This policy is valid only for a mobile SKU. */
    bitLockerEnableStorageCardEncryptionOnMobile?: boolean;
    /** Allows the admin to require encryption to be turned on using BitLocker. */
    bitLockerEncryptDevice?: boolean;
    /** BitLocker Removable Drive Policy. */
    bitLockerRemovableDrivePolicy?: BitLockerRemovableDrivePolicy;
    /** List of folder paths to be added to the list of protected folders */
    defenderAdditionalGuardedFolders?: string[];
    /** List of exe files and folders to be excluded from attack surface reduction rules */
    defenderAttackSurfaceReductionExcludedPaths?: string[];
    /** Xml content containing information regarding exploit protection details. */
    defenderExploitProtectionXml?: string;
    /** Name of the file from which DefenderExploitProtectionXml was obtained. */
    defenderExploitProtectionXmlFileName?: string;
    /** List of paths to exe that are allowed to access protected folders */
    defenderGuardedFoldersAllowedAppPaths?: string[];
    /** Indicates whether or not to block user from overriding Exploit Protection settings. */
    defenderSecurityCenterBlockExploitProtectionOverride?: boolean;
    /** Blocks stateful FTP connections to the device */
    firewallBlockStatefulFTP?: boolean;
    /** Possible values for firewallCertificateRevocationListCheckMethod */
    firewallCertificateRevocationListCheckMethod?: FirewallCertificateRevocationListCheckMethodType;
    /** Configures the idle timeout for security associations, in seconds, from 300 to 3600 inclusive. This is the period after which security associations will expire and be deleted. Valid values 300 to 3600 */
    firewallIdleTimeoutForSecurityAssociationInSeconds?: number;
    /** Configures IPSec exemptions to allow both IPv4 and IPv6 DHCP traffic */
    firewallIPSecExemptionsAllowDHCP?: boolean;
    /** Configures IPSec exemptions to allow ICMP */
    firewallIPSecExemptionsAllowICMP?: boolean;
    /** Configures IPSec exemptions to allow neighbor discovery IPv6 ICMP type-codes */
    firewallIPSecExemptionsAllowNeighborDiscovery?: boolean;
    /** Configures IPSec exemptions to allow router discovery IPv6 ICMP type-codes */
    firewallIPSecExemptionsAllowRouterDiscovery?: boolean;
    /** If an authentication set is not fully supported by a keying module, direct the module to ignore only unsupported authentication suites rather than the entire set */
    firewallMergeKeyingModuleSettings?: boolean;
    /** Possible values for firewallPacketQueueingMethod */
    firewallPacketQueueingMethod?: FirewallPacketQueueingMethodType;
    /** Possible values for firewallPreSharedKeyEncodingMethod */
    firewallPreSharedKeyEncodingMethod?: FirewallPreSharedKeyEncodingMethodType;
    /** Configures the firewall profile settings for domain networks */
    firewallProfileDomain?: WindowsFirewallNetworkProfile;
    /** Configures the firewall profile settings for private networks */
    firewallProfilePrivate?: WindowsFirewallNetworkProfile;
    /** Configures the firewall profile settings for public networks */
    firewallProfilePublic?: WindowsFirewallNetworkProfile;
    /** Allows IT Admins to control whether users can can ignore SmartScreen warnings and run malicious files. */
    smartScreenBlockOverrideForFiles?: boolean;
    /** Allows IT Admins to configure SmartScreen for Windows. */
    smartScreenEnableInShell?: boolean;
}
