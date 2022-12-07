import {LinkedResourceCollectionResponse} from './index';
import {serializeLinkedResource} from './serializeLinkedResource';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLinkedResourceCollectionResponse(writer: SerializationWriter, linkedResourceCollectionResponse: LinkedResourceCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", linkedResourceCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValuesFromMethod("value", linkedResourceCollectionResponse.value as any, serializeLinkedResource);
}
