import {BaseCollectionPaginationCountResponse, EducationUser} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationUserCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: EducationUser[];
}
