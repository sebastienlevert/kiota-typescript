import {Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ManagedAppPolicy extends Entity, Partial<Parsable> {
    /** The date and time the policy was created. */
    createdDateTime?: Date;
    /** The policy's description. */
    description?: string;
    /** Policy display name. */
    displayName?: string;
    /** Last time the policy was modified. */
    lastModifiedDateTime?: Date;
    /** List of Scope Tags for this Entity instance. */
    roleScopeTagIds?: string[];
    /** Version of the entity. */
    version?: string;
}
