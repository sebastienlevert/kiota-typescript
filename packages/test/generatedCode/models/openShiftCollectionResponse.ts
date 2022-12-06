import {BaseCollectionPaginationCountResponse, OpenShift} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OpenShiftCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: OpenShift[];
}
