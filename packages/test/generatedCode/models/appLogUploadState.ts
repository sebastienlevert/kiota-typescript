export enum AppLogUploadState {
    /** Request is waiting to be processed or under processing */
    Pending = "pending",
    /** Request is completed with file uploaded to Azure blob for download. */
    Completed = "completed",
    /** Request finished processing and in error state. */
    Failed = "failed",
}
