import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMacOSMicrosoftEdgeApp} from './deserializeIntoMacOSMicrosoftEdgeApp';
import {MacOSMicrosoftEdgeAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMacOSMicrosoftEdgeAppCollectionResponse(macOSMicrosoftEdgeAppCollectionResponse: MacOSMicrosoftEdgeAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(macOSMicrosoftEdgeAppCollectionResponse),
        "value": n => { macOSMicrosoftEdgeAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMacOSMicrosoftEdgeApp) as any ; },
    }
}
