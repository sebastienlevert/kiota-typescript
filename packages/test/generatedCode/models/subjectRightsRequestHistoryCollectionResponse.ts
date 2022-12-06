import {BaseCollectionPaginationCountResponse, SubjectRightsRequestHistory} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SubjectRightsRequestHistoryCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SubjectRightsRequestHistory[];
}
