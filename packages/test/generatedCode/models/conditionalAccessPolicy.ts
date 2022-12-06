import {ConditionalAccessPolicyState} from './conditionalAccessPolicyState';
import {ConditionalAccessConditionSet, ConditionalAccessGrantControls, ConditionalAccessSessionControls, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ConditionalAccessPolicy extends Entity, Partial<Parsable> {
    /** The conditions property */
    conditions?: ConditionalAccessConditionSet;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly. */
    createdDateTime?: Date;
    /** The description property */
    description?: string;
    /** Specifies a display name for the conditionalAccessPolicy object. */
    displayName?: string;
    /** Specifies the grant controls that must be fulfilled to pass the policy. */
    grantControls?: ConditionalAccessGrantControls;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Readonly. */
    modifiedDateTime?: Date;
    /** Specifies the session controls that are enforced after sign-in. */
    sessionControls?: ConditionalAccessSessionControls;
    /** The state property */
    state?: ConditionalAccessPolicyState;
}
