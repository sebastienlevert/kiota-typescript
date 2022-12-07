import {FilterClause} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface FilterGroup extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Filter clauses (conditions) of this group. All clauses in a group must be satisfied in order for the filter group to evaluate to true. */
    clauses?: FilterClause[];
    /** Human-readable name of the filter group. */
    name?: string;
}
