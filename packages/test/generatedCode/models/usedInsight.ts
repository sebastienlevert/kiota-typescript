import {Entity, ResourceReference, ResourceVisualization, UsageDetails} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface UsedInsight extends Entity, Partial<Parsable> {
    /** The lastUsed property */
    lastUsed?: UsageDetails;
    /** The resource property */
    resource?: Entity;
    /** The resourceReference property */
    resourceReference?: ResourceReference;
    /** The resourceVisualization property */
    resourceVisualization?: ResourceVisualization;
}
