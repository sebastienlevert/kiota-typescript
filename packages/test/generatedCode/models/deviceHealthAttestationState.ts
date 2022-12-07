import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DeviceHealthAttestationState extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** TWhen an Attestation Identity Key (AIK) is present on a device, it indicates that the device has an endorsement key (EK) certificate. */
    attestationIdentityKey?: string;
    /** On or Off of BitLocker Drive Encryption */
    bitLockerStatus?: string;
    /** The security version number of the Boot Application */
    bootAppSecurityVersion?: string;
    /** When bootDebugging is enabled, the device is used in development and testing */
    bootDebugging?: string;
    /** The security version number of the Boot Application */
    bootManagerSecurityVersion?: string;
    /** The version of the Boot Manager */
    bootManagerVersion?: string;
    /** The Boot Revision List that was loaded during initial boot on the attested device */
    bootRevisionListInfo?: string;
    /** When code integrity is enabled, code execution is restricted to integrity verified code */
    codeIntegrity?: string;
    /** The version of the Boot Manager */
    codeIntegrityCheckVersion?: string;
    /** The Code Integrity policy that is controlling the security of the boot environment */
    codeIntegrityPolicy?: string;
    /** The DHA report version. (Namespace version) */
    contentNamespaceUrl?: string;
    /** The HealthAttestation state schema version */
    contentVersion?: string;
    /** DEP Policy defines a set of hardware and software technologies that perform additional checks on memory */
    dataExcutionPolicy?: string;
    /** The DHA report version. (Namespace version) */
    deviceHealthAttestationStatus?: string;
    /** ELAM provides protection for the computers in your network when they start up */
    earlyLaunchAntiMalwareDriverProtection?: string;
    /** This attribute indicates if DHA is supported for the device */
    healthAttestationSupportedStatus?: string;
    /** This attribute appears if DHA-Service detects an integrity issue */
    healthStatusMismatchInfo?: string;
    /** The DateTime when device was evaluated or issued to MDM */
    issuedDateTime?: Date;
    /** The Timestamp of the last update. */
    lastUpdateDateTime?: string;
    /** When operatingSystemKernelDebugging is enabled, the device is used in development and testing */
    operatingSystemKernelDebugging?: string;
    /** The Operating System Revision List that was loaded during initial boot on the attested device */
    operatingSystemRevListInfo?: string;
    /** The measurement that is captured in PCR[0] */
    pcr0?: string;
    /** Informational attribute that identifies the HASH algorithm that was used by TPM */
    pcrHashAlgorithm?: string;
    /** The number of times a PC device has hibernated or resumed */
    resetCount?: number;
    /** The number of times a PC device has rebooted */
    restartCount?: number;
    /** Safe mode is a troubleshooting option for Windows that starts your computer in a limited state */
    safeMode?: string;
    /** When Secure Boot is enabled, the core components must have the correct cryptographic signatures */
    secureBoot?: string;
    /** Fingerprint of the Custom Secure Boot Configuration Policy */
    secureBootConfigurationPolicyFingerPrint?: string;
    /** When test signing is allowed, the device does not enforce signature validation during boot */
    testSigning?: string;
    /** The security version number of the Boot Application */
    tpmVersion?: string;
    /** VSM is a container that protects high value assets from a compromised kernel */
    virtualSecureMode?: string;
    /** Operating system running with limited services that is used to prepare a computer for Windows */
    windowsPE?: string;
}
