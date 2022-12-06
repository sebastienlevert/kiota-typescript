import {EducationAssignmentGradeType, EducationItemBody} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RubricLevel extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The description of this rubric level. */
    description?: EducationItemBody;
    /** The name of this rubric level. */
    displayName?: string;
    /** Null if this is a no-points rubric; educationAssignmentPointsGradeType if it is a points rubric. */
    grading?: EducationAssignmentGradeType;
    /** The ID of this resource. */
    levelId?: string;
    /** The OdataType property */
    odataType?: string;
}
