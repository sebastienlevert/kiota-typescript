import {Contact, Entity, MultiValueLegacyExtendedProperty, SingleValueLegacyExtendedProperty} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ContactFolder extends Entity, Partial<Parsable> {
    /** The collection of child folders in the folder. Navigation property. Read-only. Nullable. */
    childFolders?: ContactFolder[];
    /** The contacts in the folder. Navigation property. Read-only. Nullable. */
    contacts?: Contact[];
    /** The folder's display name. */
    displayName?: string;
    /** The collection of multi-value extended properties defined for the contactFolder. Read-only. Nullable. */
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
    /** The ID of the folder's parent folder. */
    parentFolderId?: string;
    /** The collection of single-value extended properties defined for the contactFolder. Read-only. Nullable. */
    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
    /** The name of the folder if the folder is a recognized folder. Currently contacts is the only recognized contacts folder. */
    wellKnownName?: string;
}
