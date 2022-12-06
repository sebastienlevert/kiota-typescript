import {BaseCollectionPaginationCountResponse, ProvisioningObjectSummary} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ProvisioningObjectSummaryCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ProvisioningObjectSummary[];
}
