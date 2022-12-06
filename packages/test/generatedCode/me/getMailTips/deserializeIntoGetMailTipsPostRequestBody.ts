import {MailTipsType} from '../../models/mailTipsType';
import {GetMailTipsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetMailTipsPostRequestBody(getMailTipsPostRequestBody: GetMailTipsPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "emailAddresses": n => { getMailTipsPostRequestBody.emailAddresses = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "mailTipsOptions": n => { getMailTipsPostRequestBody.mailTipsOptions = n.getEnumValue<MailTipsType>(MailTipsType) as any ; },
    }
}
