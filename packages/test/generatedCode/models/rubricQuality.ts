import {EducationItemBody, RubricCriterion} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RubricQuality extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The collection of criteria for this rubric quality. */
    criteria?: RubricCriterion[];
    /** The description of this rubric quality. */
    description?: EducationItemBody;
    /** The name of this rubric quality. */
    displayName?: string;
    /** The OdataType property */
    odataType?: string;
    /** The ID of this resource. */
    qualityId?: string;
    /** If present, a numerical weight for this quality.  Weights must add up to 100. */
    weight?: number;
}
