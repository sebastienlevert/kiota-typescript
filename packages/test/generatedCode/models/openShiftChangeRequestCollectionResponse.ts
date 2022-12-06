import {BaseCollectionPaginationCountResponse, OpenShiftChangeRequest} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OpenShiftChangeRequestCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: OpenShiftChangeRequest[];
}
