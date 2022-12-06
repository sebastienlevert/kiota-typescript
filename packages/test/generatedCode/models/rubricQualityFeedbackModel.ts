import {EducationItemBody} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RubricQualityFeedbackModel extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Specific feedback for one quality of this rubric. */
    feedback?: EducationItemBody;
    /** The OdataType property */
    odataType?: string;
    /** The ID of the rubricQuality that this feedback is related to. */
    qualityId?: string;
}
