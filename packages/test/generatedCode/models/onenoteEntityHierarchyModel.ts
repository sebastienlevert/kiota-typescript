import {IdentitySet, OnenoteEntitySchemaObjectModel} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteEntityHierarchyModel extends OnenoteEntitySchemaObjectModel, Partial<Parsable> {
    /** Identity of the user, device, and application which created the item. Read-only. */
    createdBy?: IdentitySet;
    /** The name of the notebook. */
    displayName?: string;
    /** Identity of the user, device, and application which created the item. Read-only. */
    lastModifiedBy?: IdentitySet;
    /** The date and time when the notebook was last modified. The timestamp represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only. */
    lastModifiedDateTime?: Date;
}
