import {PlannerContainerType} from './plannerContainerType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerPlanContainer extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The identifier of the resource that contains the plan. */
    containerId?: string;
    /** The type property */
    type?: PlannerContainerType;
    /** The full canonical URL of the container. */
    url?: string;
}
