/** Provides operations to manage the authenticationMethodsPolicy singleton. */
export enum SubjectRightsRequestStage {
    ContentRetrieval = "contentRetrieval",
    ContentReview = "contentReview",
    GenerateReport = "generateReport",
    ContentDeletion = "contentDeletion",
    CaseResolved = "caseResolved",
    ContentEstimate = "contentEstimate",
    UnknownFutureValue = "unknownFutureValue",
}
