import {DriveRecipient} from '../../../../../../../models/';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface InvitePostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The expirationDateTime property */
    expirationDateTime?: string;
    /** The message property */
    message?: string;
    /** The password property */
    password?: string;
    /** The recipients property */
    recipients?: DriveRecipient[];
    /** The requireSignIn property */
    requireSignIn?: boolean;
    /** The retainInheritedPermissions property */
    retainInheritedPermissions?: boolean;
    /** The roles property */
    roles?: string[];
    /** The sendInvitation property */
    sendInvitation?: boolean;
}
