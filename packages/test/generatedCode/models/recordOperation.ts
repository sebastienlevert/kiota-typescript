import {CommsOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RecordOperation extends CommsOperation, Partial<Parsable> {
    /** The access token required to retrieve the recording. */
    recordingAccessToken?: string;
    /** The location where the recording is located. */
    recordingLocation?: string;
}
