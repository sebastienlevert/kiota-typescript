import {Entity, IdentitySet} from '../';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Tag extends Entity, Partial<Parsable> {
    /** The createdBy property */
    createdBy?: IdentitySet;
    /** The description property */
    description?: string;
    /** The displayName property */
    displayName?: string;
    /** The lastModifiedDateTime property */
    lastModifiedDateTime?: Date;
}
