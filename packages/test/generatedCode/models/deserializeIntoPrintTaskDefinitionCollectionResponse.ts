import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPrintTaskDefinition} from './deserializeIntoPrintTaskDefinition';
import {PrintTaskDefinitionCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintTaskDefinitionCollectionResponse(printTaskDefinitionCollectionResponse: PrintTaskDefinitionCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printTaskDefinitionCollectionResponse),
        "value": n => { printTaskDefinitionCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintTaskDefinition) as any ; },
    }
}
