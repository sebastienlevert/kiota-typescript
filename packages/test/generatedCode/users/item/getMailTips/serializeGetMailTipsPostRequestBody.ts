import {MailTipsType} from '../../../models/mailTipsType';
import {GetMailTipsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetMailTipsPostRequestBody(writer: SerializationWriter, getMailTipsPostRequestBody: GetMailTipsPostRequestBody | undefined = {}) : void {
            writer.writeCollectionOfPrimitiveValues<string>("emailAddresses", getMailTipsPostRequestBody.emailAddresses);
            writer.writeEnumValue<MailTipsType>("mailTipsOptions", getMailTipsPostRequestBody.mailTipsOptions);
}
