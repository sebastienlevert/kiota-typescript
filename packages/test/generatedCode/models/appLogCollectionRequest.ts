import {AppLogUploadState} from './appLogUploadState';
import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AppLogCollectionRequest extends Entity, Partial<Parsable> {
    /** Time at which the upload log request reached a terminal state */
    completedDateTime?: Date;
    /** List of log folders. */
    customLogFolders?: string[];
    /** Error message if any during the upload process */
    errorMessage?: string;
    /** AppLogUploadStatus */
    status?: AppLogUploadState;
}
