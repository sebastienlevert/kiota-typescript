import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoControlScore} from './deserializeIntoControlScore';
import {ControlScoreCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoControlScoreCollectionResponse(controlScoreCollectionResponse: ControlScoreCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(controlScoreCollectionResponse),
        "value": n => { controlScoreCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoControlScore) as any ; },
    }
}
