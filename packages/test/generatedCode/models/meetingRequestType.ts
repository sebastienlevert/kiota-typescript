/** Provides operations to manage the collection of device entities. */
export enum MeetingRequestType {
    None = "none",
    NewMeetingRequest = "newMeetingRequest",
    FullUpdate = "fullUpdate",
    InformationalUpdate = "informationalUpdate",
    SilentUpdate = "silentUpdate",
    Outdated = "outdated",
    PrincipalWantsCopy = "principalWantsCopy",
}
