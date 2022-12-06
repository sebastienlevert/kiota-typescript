import {EducationClass, EducationSchool, EducationUser} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface EducationRoot extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The classes property */
    classes?: EducationClass[];
    /** The me property */
    me?: EducationUser;
    /** The OdataType property */
    odataType?: string;
    /** The schools property */
    schools?: EducationSchool[];
    /** The users property */
    users?: EducationUser[];
}
