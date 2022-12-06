/** Provides operations to manage the collection of chat entities. */
export enum TaskStatus {
    NotStarted = "notStarted",
    InProgress = "inProgress",
    Completed = "completed",
    WaitingOnOthers = "waitingOnOthers",
    Deferred = "deferred",
}
