import {IpNamedLocationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIpNamedLocation} from './serializeIpNamedLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIpNamedLocationCollectionResponse(writer: SerializationWriter, ipNamedLocationCollectionResponse: IpNamedLocationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, ipNamedLocationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", ipNamedLocationCollectionResponse.value as any, serializeIpNamedLocation);
}
