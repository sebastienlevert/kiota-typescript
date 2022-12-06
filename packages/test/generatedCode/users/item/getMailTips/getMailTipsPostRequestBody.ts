import {MailTipsType} from '../../../models/mailTipsType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface GetMailTipsPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The EmailAddresses property */
    emailAddresses?: string[];
    /** The MailTipsOptions property */
    mailTipsOptions?: MailTipsType;
}
