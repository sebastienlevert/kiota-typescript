/** Provides operations to manage the collection of chat entities. */
export enum AllowedTargetScope {
    NotSpecified = "notSpecified",
    SpecificDirectoryUsers = "specificDirectoryUsers",
    SpecificConnectedOrganizationUsers = "specificConnectedOrganizationUsers",
    SpecificDirectoryServicePrincipals = "specificDirectoryServicePrincipals",
    AllMemberUsers = "allMemberUsers",
    AllDirectoryUsers = "allDirectoryUsers",
    AllDirectoryServicePrincipals = "allDirectoryServicePrincipals",
    AllConfiguredConnectedOrganizationUsers = "allConfiguredConnectedOrganizationUsers",
    AllExternalUsers = "allExternalUsers",
    UnknownFutureValue = "unknownFutureValue",
}
