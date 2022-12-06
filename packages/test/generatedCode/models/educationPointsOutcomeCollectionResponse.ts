import {BaseCollectionPaginationCountResponse, EducationPointsOutcome} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationPointsOutcomeCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EducationPointsOutcome[];
}
