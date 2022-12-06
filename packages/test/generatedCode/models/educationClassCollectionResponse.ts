import {BaseCollectionPaginationCountResponse, EducationClass} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationClassCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EducationClass[];
}
