import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationTeacher extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** ID of the teacher in the source system. */
    externalId?: string;
    /** The OdataType property */
    odataType?: string;
    /** Teacher number. */
    teacherNumber?: string;
}
