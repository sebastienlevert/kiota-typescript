import {BaseCollectionPaginationCountResponse, EducationRubric} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationRubricCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EducationRubric[];
}
