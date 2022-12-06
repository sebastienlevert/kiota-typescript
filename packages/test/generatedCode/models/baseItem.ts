import {Entity, IdentitySet, ItemReference, User} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BaseItem extends Entity, Partial<Parsable> {
    /** Identity of the user, device, or application which created the item. Read-only. */
    createdBy?: IdentitySet;
    /** Identity of the user who created the item. Read-only. */
    createdByUser?: User;
    /** Date and time of item creation. Read-only. */
    createdDateTime?: Date;
    /** Provides a user-visible description of the item. Optional. */
    description?: string;
    /** ETag for the item. Read-only. */
    eTag?: string;
    /** Identity of the user, device, and application which last modified the item. Read-only. */
    lastModifiedBy?: IdentitySet;
    /** Identity of the user who last modified the item. Read-only. */
    lastModifiedByUser?: User;
    /** Date and time the item was last modified. Read-only. */
    lastModifiedDateTime?: Date;
    /** The name of the item. Read-write. */
    name?: string;
    /** Parent information, if the item has a parent. Read-write. */
    parentReference?: ItemReference;
    /** URL that displays the resource in the browser. Read-only. */
    webUrl?: string;
}
