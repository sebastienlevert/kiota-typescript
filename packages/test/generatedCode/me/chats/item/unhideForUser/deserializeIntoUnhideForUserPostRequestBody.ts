import {deserializeIntoTeamworkUserIdentity} from '../../../../models/deserializeIntoTeamworkUserIdentity';
import {UnhideForUserPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUnhideForUserPostRequestBody(unhideForUserPostRequestBody: UnhideForUserPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "user": n => { unhideForUserPostRequestBody.user = n.getObject(deserializeIntoTeamworkUserIdentity) as any ; },
    }
}
