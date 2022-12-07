import {Entity, KeyValuePair, SynchronizationSchedule, SynchronizationSchema, SynchronizationStatus} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SynchronizationJob extends Entity, Partial<Parsable> {
    /** The schedule property */
    schedule?: SynchronizationSchedule;
    /** The schema property */
    schema?: SynchronizationSchema;
    /** The status property */
    status?: SynchronizationStatus;
    /** Settings associated with the job. Some settings are inherited from the template. */
    synchronizationJobSettings?: KeyValuePair[];
    /** Identifier of the synchronization template this job is based on. */
    templateId?: string;
}
