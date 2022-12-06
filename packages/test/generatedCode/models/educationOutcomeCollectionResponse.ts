import {BaseCollectionPaginationCountResponse, EducationOutcome} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationOutcomeCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EducationOutcome[];
}
