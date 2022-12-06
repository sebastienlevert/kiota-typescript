import {MailTipsError} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMailTipsError(writer: SerializationWriter, mailTipsError: MailTipsError | undefined = {}) : void {
            writer.writeStringValue("code", mailTipsError.code);
            writer.writeStringValue("message", mailTipsError.message);
            writer.writeStringValue("@odata.type", mailTipsError.odataType);
}
