import {MobileThreatDefenseConnectorCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMobileThreatDefenseConnector} from './serializeMobileThreatDefenseConnector';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMobileThreatDefenseConnectorCollectionResponse(writer: SerializationWriter, mobileThreatDefenseConnectorCollectionResponse: MobileThreatDefenseConnectorCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, mobileThreatDefenseConnectorCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", mobileThreatDefenseConnectorCollectionResponse.value as any, serializeMobileThreatDefenseConnector);
}
