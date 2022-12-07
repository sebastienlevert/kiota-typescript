import {deserializeIntoEmailAddress} from './deserializeIntoEmailAddress';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {Mention} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMention(mention: Mention | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(mention),
        "application": n => { mention.application = n.getStringValue() as any ; },
        "clientReference": n => { mention.clientReference = n.getStringValue() as any ; },
        "createdBy": n => { mention.createdBy = n.getObject(deserializeIntoEmailAddress) as any ; },
        "createdDateTime": n => { mention.createdDateTime = n.getDateValue() as any ; },
        "deepLink": n => { mention.deepLink = n.getStringValue() as any ; },
        "mentioned": n => { mention.mentioned = n.getObject(deserializeIntoEmailAddress) as any ; },
        "mentionText": n => { mention.mentionText = n.getStringValue() as any ; },
        "serverCreatedDateTime": n => { mention.serverCreatedDateTime = n.getDateValue() as any ; },
    }
}
