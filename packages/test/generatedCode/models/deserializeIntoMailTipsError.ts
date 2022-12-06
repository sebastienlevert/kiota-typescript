import {MailTipsError} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMailTipsError(mailTipsError: MailTipsError | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { mailTipsError.code = n.getStringValue() as any ; },
        "message": n => { mailTipsError.message = n.getStringValue() as any ; },
        "@odata.type": n => { mailTipsError.odataType = n.getStringValue() as any ; },
    }
}
