import {deserializeIntoTeamworkUserIdentity} from '../../../../../models/deserializeIntoTeamworkUserIdentity';
import {HideForUserPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoHideForUserPostRequestBody(hideForUserPostRequestBody: HideForUserPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "user": n => { hideForUserPostRequestBody.user = n.getObject(deserializeIntoTeamworkUserIdentity) as any ; },
    }
}
