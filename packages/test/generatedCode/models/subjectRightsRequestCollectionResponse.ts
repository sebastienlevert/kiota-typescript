import {BaseCollectionPaginationCountResponse, SubjectRightsRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SubjectRightsRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SubjectRightsRequest[];
}
