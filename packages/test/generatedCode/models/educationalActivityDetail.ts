import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationalActivityDetail extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Shortened name of the degree or program (example: PhD, MBA) */
    abbreviation?: string;
    /** Extracurricular activities undertaken alongside the program. */
    activities?: string[];
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Any awards or honors associated with the program. */
    awards?: string[];
    /** Short description of the program provided by the user. */
    description?: string;
    /** Long-form name of the program that the user has provided. */
    displayName?: string;
    /** Majors and minors associated with the program. (if applicable) */
    fieldsOfStudy?: string[];
    /** The final grade, class, GPA or score. */
    grade?: string;
    /** Additional notes the user has provided. */
    notes?: string;
    /** Link to the degree or program page. */
    webUrl?: string;
}
