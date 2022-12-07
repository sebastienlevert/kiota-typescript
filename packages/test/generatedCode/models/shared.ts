import {IdentitySet} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Shared extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The owner property */
    owner?: IdentitySet;
    /** Indicates the scope of how the item is shared: anonymous, organization, or users. Read-only. */
    scope?: string;
    /** The sharedBy property */
    sharedBy?: IdentitySet;
    /** The UTC date and time when the item was shared. Read-only. */
    sharedDateTime?: Date;
}
