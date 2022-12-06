/** Provides operations to manage the collection of agreementAcceptance entities. */
export enum MailDestinationRoutingReason {
    None = "none",
    MailFlowRule = "mailFlowRule",
    SafeSender = "safeSender",
    BlockedSender = "blockedSender",
    AdvancedSpamFiltering = "advancedSpamFiltering",
    DomainAllowList = "domainAllowList",
    DomainBlockList = "domainBlockList",
    NotInAddressBook = "notInAddressBook",
    FirstTimeSender = "firstTimeSender",
    AutoPurgeToInbox = "autoPurgeToInbox",
    AutoPurgeToJunk = "autoPurgeToJunk",
    AutoPurgeToDeleted = "autoPurgeToDeleted",
    Outbound = "outbound",
    NotJunk = "notJunk",
    Junk = "junk",
    UnknownFutureValue = "unknownFutureValue",
}
