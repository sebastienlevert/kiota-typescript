import {deserializeIntoLinkedResource} from './deserializeIntoLinkedResource';
import {LinkedResourceCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoLinkedResourceCollectionResponse(linkedResourceCollectionResponse: LinkedResourceCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { linkedResourceCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { linkedResourceCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoLinkedResource) as any ; },
    }
}
