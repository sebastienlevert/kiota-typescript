import {BaseCollectionPaginationCountResponse, EducationCategory} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationCategoryCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EducationCategory[];
}
