import {BaseCollectionPaginationCountResponse, EducationRubricOutcome} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationRubricOutcomeCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EducationRubricOutcome[];
}
