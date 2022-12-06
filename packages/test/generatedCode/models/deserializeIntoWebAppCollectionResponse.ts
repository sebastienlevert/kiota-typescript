import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWebApp} from './deserializeIntoWebApp';
import {WebAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWebAppCollectionResponse(webAppCollectionResponse: WebAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(webAppCollectionResponse),
        "value": n => { webAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWebApp) as any ; },
    }
}
