import {Entity, IdentitySet, PublicationFacet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BaseItemVersion extends Entity, Partial<Parsable> {
    /** Identity of the user which last modified the version. Read-only. */
    lastModifiedBy?: IdentitySet;
    /** Date and time the version was last modified. Read-only. */
    lastModifiedDateTime?: Date;
    /** Indicates the publication status of this particular version. Read-only. */
    publication?: PublicationFacet;
}
