import {deserializeIntoDateTimeTimeZone} from './deserializeIntoDateTimeTimeZone';
import {deserializeIntoLocaleInfo} from './deserializeIntoLocaleInfo';
import {AutomaticRepliesMailTips} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAutomaticRepliesMailTips(automaticRepliesMailTips: AutomaticRepliesMailTips | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "message": n => { automaticRepliesMailTips.message = n.getStringValue() as any ; },
        "messageLanguage": n => { automaticRepliesMailTips.messageLanguage = n.getObject(deserializeIntoLocaleInfo) as any ; },
        "@odata.type": n => { automaticRepliesMailTips.odataType = n.getStringValue() as any ; },
        "scheduledEndTime": n => { automaticRepliesMailTips.scheduledEndTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "scheduledStartTime": n => { automaticRepliesMailTips.scheduledStartTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
    }
}
