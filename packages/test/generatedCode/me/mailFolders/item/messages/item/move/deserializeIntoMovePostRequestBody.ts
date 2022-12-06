import {MovePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMovePostRequestBody(movePostRequestBody: MovePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "destinationId": n => { movePostRequestBody.destinationId = n.getStringValue() as any ; },
    }
}
