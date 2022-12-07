import {Entity, PrintDocument, PrintJobConfiguration, PrintJobStatus, PrintTask, UserIdentity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintJob extends Entity, Partial<Parsable> {
    /** The acknowledgedDateTime property */
    acknowledgedDateTime?: Date;
    /** The completedDateTime property */
    completedDateTime?: Date;
    /** The configuration property */
    configuration?: PrintJobConfiguration;
    /** The createdBy property */
    createdBy?: UserIdentity;
    /** The DateTimeOffset when the job was created. Read-only. */
    createdDateTime?: Date;
    /** The displayName property */
    displayName?: string;
    /** The documents property */
    documents?: PrintDocument[];
    /** The errorCode property */
    errorCode?: number;
    /** If true, document can be fetched by printer. */
    isFetchable?: boolean;
    /** Contains the source job URL, if the job has been redirected from another printer. */
    redirectedFrom?: string;
    /** Contains the destination job URL, if the job has been redirected to another printer. */
    redirectedTo?: string;
    /** The status property */
    status?: PrintJobStatus;
    /** A list of printTasks that were triggered by this print job. */
    tasks?: PrintTask[];
}
