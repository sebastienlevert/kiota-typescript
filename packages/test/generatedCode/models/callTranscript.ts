import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CallTranscript extends Entity, Partial<Parsable> {
    /** A field representing the content of the transcript. Read-only. */
    content?: string;
    /** Date and time at which the transcript was created. Read-only. */
    createdDateTime?: Date;
}
