import {BaseCollectionPaginationCountResponse, SubjectSet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SubjectSetCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SubjectSet[];
}
