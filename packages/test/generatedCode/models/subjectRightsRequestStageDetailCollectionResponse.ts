import {BaseCollectionPaginationCountResponse, SubjectRightsRequestStageDetail} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SubjectRightsRequestStageDetailCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: SubjectRightsRequestStageDetail[];
}
