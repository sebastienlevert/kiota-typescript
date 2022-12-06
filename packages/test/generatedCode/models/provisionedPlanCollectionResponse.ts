import {BaseCollectionPaginationCountResponse, ProvisionedPlan} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisionedPlanCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ProvisionedPlan[];
}
