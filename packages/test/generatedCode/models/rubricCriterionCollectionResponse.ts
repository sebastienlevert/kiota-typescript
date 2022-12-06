import {BaseCollectionPaginationCountResponse, RubricCriterion} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RubricCriterionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: RubricCriterion[];
}
