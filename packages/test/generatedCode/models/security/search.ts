import {Entity, IdentitySet} from '../';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Search extends Entity, Partial<Parsable> {
    /** The contentQuery property */
    contentQuery?: string;
    /** The createdBy property */
    createdBy?: IdentitySet;
    /** The createdDateTime property */
    createdDateTime?: Date;
    /** The description property */
    description?: string;
    /** The displayName property */
    displayName?: string;
    /** The lastModifiedBy property */
    lastModifiedBy?: IdentitySet;
    /** The lastModifiedDateTime property */
    lastModifiedDateTime?: Date;
}
