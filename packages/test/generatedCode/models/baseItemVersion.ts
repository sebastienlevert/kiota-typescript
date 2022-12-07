import {Entity, IdentitySet, PublicationFacet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface BaseItemVersion extends Entity, Partial<Parsable> {
    /** The lastModifiedBy property */
    lastModifiedBy?: IdentitySet;
    /** Date and time the version was last modified. Read-only. */
    lastModifiedDateTime?: Date;
    /** The publication property */
    publication?: PublicationFacet;
}
