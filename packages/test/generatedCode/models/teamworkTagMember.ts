import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkTagMember extends Entity, Partial<Parsable> {
    /** The member's display name. */
    displayName?: string;
    /** The ID of the tenant that the tag member is a part of. */
    tenantId?: string;
    /** The user ID of the member. */
    userId?: string;
}
