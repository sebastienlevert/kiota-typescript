import {BaseCollectionPaginationCountResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBaseCollectionPaginationCountResponse(baseCollectionPaginationCountResponse: BaseCollectionPaginationCountResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.count": n => { baseCollectionPaginationCountResponse.odataCount = n.getNumberValue() as any ; },
        "@odata.nextLink": n => { baseCollectionPaginationCountResponse.odataNextLink = n.getStringValue() as any ; },
    }
}
