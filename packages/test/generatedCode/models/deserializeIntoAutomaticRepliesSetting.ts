import {AutomaticRepliesStatus} from './automaticRepliesStatus';
import {deserializeIntoDateTimeTimeZone} from './deserializeIntoDateTimeTimeZone';
import {ExternalAudienceScope} from './externalAudienceScope';
import {AutomaticRepliesSetting} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAutomaticRepliesSetting(automaticRepliesSetting: AutomaticRepliesSetting | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "externalAudience": n => { automaticRepliesSetting.externalAudience = n.getEnumValue<ExternalAudienceScope>(ExternalAudienceScope) as any ; },
        "externalReplyMessage": n => { automaticRepliesSetting.externalReplyMessage = n.getStringValue() as any ; },
        "internalReplyMessage": n => { automaticRepliesSetting.internalReplyMessage = n.getStringValue() as any ; },
        "scheduledEndDateTime": n => { automaticRepliesSetting.scheduledEndDateTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "scheduledStartDateTime": n => { automaticRepliesSetting.scheduledStartDateTime = n.getObject(deserializeIntoDateTimeTimeZone) as any ; },
        "status": n => { automaticRepliesSetting.status = n.getEnumValue<AutomaticRepliesStatus>(AutomaticRepliesStatus) as any ; },
    }
}
