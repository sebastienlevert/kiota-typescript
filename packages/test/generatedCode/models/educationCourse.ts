import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationCourse extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Unique identifier for the course. */
    courseNumber?: string;
    /** Description of the course. */
    description?: string;
    /** Name of the course. */
    displayName?: string;
    /** ID of the course from the syncing system. */
    externalId?: string;
    /** The OdataType property */
    odataType?: string;
    /** Subject of the course. */
    subject?: string;
}
