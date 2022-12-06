/** Provides operations to manage the auditLogRoot singleton. */
export enum AuthenticationMethodSignInState {
    NotSupported = "notSupported",
    NotAllowedByPolicy = "notAllowedByPolicy",
    NotEnabled = "notEnabled",
    PhoneNumberNotUnique = "phoneNumberNotUnique",
    Ready = "ready",
    NotConfigured = "notConfigured",
    UnknownFutureValue = "unknownFutureValue",
}
