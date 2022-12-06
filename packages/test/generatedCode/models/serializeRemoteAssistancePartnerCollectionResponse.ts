import {RemoteAssistancePartnerCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRemoteAssistancePartner} from './serializeRemoteAssistancePartner';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRemoteAssistancePartnerCollectionResponse(writer: SerializationWriter, remoteAssistancePartnerCollectionResponse: RemoteAssistancePartnerCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, remoteAssistancePartnerCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", remoteAssistancePartnerCollectionResponse.value as any, serializeRemoteAssistancePartner);
}
