import {Entity, IdentitySet} from '../';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DataSet extends Entity, Partial<Parsable> {
    /** The createdBy property */
    createdBy?: IdentitySet;
    /** The createdDateTime property */
    createdDateTime?: Date;
    /** The displayName property */
    displayName?: string;
}
