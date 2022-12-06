import {BaseCollectionPaginationCountResponse, ManagedAppPolicyDeploymentSummaryPerApp} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppPolicyDeploymentSummaryPerAppCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedAppPolicyDeploymentSummaryPerApp[];
}
