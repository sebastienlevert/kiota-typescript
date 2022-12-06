import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPlayPromptOperation} from './deserializeIntoPlayPromptOperation';
import {PlayPromptOperationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPlayPromptOperationCollectionResponse(playPromptOperationCollectionResponse: PlayPromptOperationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(playPromptOperationCollectionResponse),
        "value": n => { playPromptOperationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPlayPromptOperation) as any ; },
    }
}
