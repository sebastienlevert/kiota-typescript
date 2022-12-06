import {AuthenticationContextClassReference, ConditionalAccessPolicy, ConditionalAccessTemplate, Entity, NamedLocation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessRoot extends Entity, Partial<Parsable> {
    /** Read-only. Nullable. Returns a collection of the specified authentication context class references. */
    authenticationContextClassReferences?: AuthenticationContextClassReference[];
    /** Read-only. Nullable. Returns a collection of the specified named locations. */
    namedLocations?: NamedLocation[];
    /** Read-only. Nullable. Returns a collection of the specified Conditional Access (CA) policies. */
    policies?: ConditionalAccessPolicy[];
    /** Read-only. Nullable. Returns a collection of the specified Conditional Access templates. */
    templates?: ConditionalAccessTemplate[];
}
