import {BaseCollectionPaginationCountResponse, EducationSchool} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationSchoolCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EducationSchool[];
}
