import {SharePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharePostRequestBody(sharePostRequestBody: SharePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "endDateTime": n => { sharePostRequestBody.endDateTime = n.getDateValue() as any ; },
        "notifyTeam": n => { sharePostRequestBody.notifyTeam = n.getBooleanValue() as any ; },
        "startDateTime": n => { sharePostRequestBody.startDateTime = n.getDateValue() as any ; },
    }
}
