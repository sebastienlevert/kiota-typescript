import {InvitationParticipantInfo} from '../../../../models/';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RedirectPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The callbackUri property */
    callbackUri?: string;
    /** The targets property */
    targets?: InvitationParticipantInfo[];
    /** The timeout property */
    timeout?: number;
}
