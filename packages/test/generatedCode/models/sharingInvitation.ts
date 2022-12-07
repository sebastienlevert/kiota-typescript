import {IdentitySet} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SharingInvitation extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The email address provided for the recipient of the sharing invitation. Read-only. */
    email?: string;
    /** The invitedBy property */
    invitedBy?: IdentitySet;
    /** The redeemedBy property */
    redeemedBy?: string;
    /** If true the recipient of the invitation needs to sign in in order to access the shared item. Read-only. */
    signInRequired?: boolean;
}
