/** Provides operations to manage the auditLogRoot singleton. */
export enum ConditionalAccessGrantControl {
    Block = "block",
    Mfa = "mfa",
    CompliantDevice = "compliantDevice",
    DomainJoinedDevice = "domainJoinedDevice",
    ApprovedApplication = "approvedApplication",
    CompliantApplication = "compliantApplication",
    PasswordChange = "passwordChange",
    UnknownFutureValue = "unknownFutureValue",
}
