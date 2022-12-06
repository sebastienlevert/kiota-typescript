/** Provides operations to manage the collection of chat entities. */
export enum CaseOperationStatus {
    NotStarted = "notStarted",
    SubmissionFailed = "submissionFailed",
    Running = "running",
    Succeeded = "succeeded",
    PartiallySucceeded = "partiallySucceeded",
    Failed = "failed",
    UnknownFutureValue = "unknownFutureValue",
}
