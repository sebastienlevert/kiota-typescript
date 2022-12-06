import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMobileThreatDefenseConnector} from './deserializeIntoMobileThreatDefenseConnector';
import {MobileThreatDefenseConnectorCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMobileThreatDefenseConnectorCollectionResponse(mobileThreatDefenseConnectorCollectionResponse: MobileThreatDefenseConnectorCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(mobileThreatDefenseConnectorCollectionResponse),
        "value": n => { mobileThreatDefenseConnectorCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMobileThreatDefenseConnector) as any ; },
    }
}
