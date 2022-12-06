import {BaseCollectionPaginationCountResponse, ServicePlanInfo} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServicePlanInfoCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ServicePlanInfo[];
}
