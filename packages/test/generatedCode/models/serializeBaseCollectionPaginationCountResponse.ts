import {BaseCollectionPaginationCountResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBaseCollectionPaginationCountResponse(writer: SerializationWriter, baseCollectionPaginationCountResponse: BaseCollectionPaginationCountResponse | undefined = {}) : void {
            writer.writeNumberValue("@odata.count", baseCollectionPaginationCountResponse.odataCount);
            writer.writeStringValue("@odata.nextLink", baseCollectionPaginationCountResponse.odataNextLink);
}
