import {Entity, IdentitySet, ItemReference, User} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BaseItem extends Entity, Partial<Parsable> {
    /** The createdBy property */
    createdBy?: IdentitySet;
    /** The createdByUser property */
    createdByUser?: User;
    /** Date and time of item creation. Read-only. */
    createdDateTime?: Date;
    /** The description property */
    description?: string;
    /** ETag for the item. Read-only. */
    eTag?: string;
    /** The lastModifiedBy property */
    lastModifiedBy?: IdentitySet;
    /** The lastModifiedByUser property */
    lastModifiedByUser?: User;
    /** Date and time the item was last modified. Read-only. */
    lastModifiedDateTime?: Date;
    /** The name of the item. Read-write. */
    name?: string;
    /** The parentReference property */
    parentReference?: ItemReference;
    /** URL that displays the resource in the browser. Read-only. */
    webUrl?: string;
}
