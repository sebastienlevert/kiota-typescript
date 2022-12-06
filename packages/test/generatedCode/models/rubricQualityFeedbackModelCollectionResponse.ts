import {BaseCollectionPaginationCountResponse, RubricQualityFeedbackModel} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RubricQualityFeedbackModelCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: RubricQualityFeedbackModel[];
}
