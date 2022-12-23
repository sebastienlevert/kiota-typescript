export enum DeviceGuardLocalSystemAuthorityCredentialGuardState {
    /** Running */
    Running = "running",
    /** Reboot required */
    RebootRequired = "rebootRequired",
    /** Not licensed for Credential Guard */
    NotLicensed = "notLicensed",
    /** Not configured */
    NotConfigured = "notConfigured",
    /** Virtualization Based security is not running */
    VirtualizationBasedSecurityNotRunning = "virtualizationBasedSecurityNotRunning",
}