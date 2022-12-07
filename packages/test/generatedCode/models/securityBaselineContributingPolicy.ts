import {SecurityBaselinePolicySourceType} from './securityBaselinePolicySourceType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SecurityBaselineContributingPolicy extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Name of the policy */
    displayName?: string;
    /** Unique identifier of the policy */
    sourceId?: string;
    /** Authoring source of a policy */
    sourceType?: SecurityBaselinePolicySourceType;
}
