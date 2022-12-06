import {Entity, IdentitySet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ChangeTrackedEntity extends Entity, Partial<Parsable> {
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    createdDateTime?: Date;
    /** Identity of the person who last modified the entity. */
    lastModifiedBy?: IdentitySet;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    lastModifiedDateTime?: Date;
}
