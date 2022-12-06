import {EducationGender} from './educationGender';
import {AdditionalDataHolder, DateOnly, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationStudent extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Birth date of the student. */
    birthDate?: DateOnly;
    /** ID of the student in the source system. */
    externalId?: string;
    /** The possible values are: female, male, other, unknownFutureValue. */
    gender?: EducationGender;
    /** Current grade level of the student. */
    grade?: string;
    /** Year the student is graduating from the school. */
    graduationYear?: string;
    /** The OdataType property */
    odataType?: string;
    /** Student Number. */
    studentNumber?: string;
}
