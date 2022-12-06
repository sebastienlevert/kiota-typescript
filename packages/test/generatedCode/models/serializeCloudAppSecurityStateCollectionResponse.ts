import {CloudAppSecurityStateCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeCloudAppSecurityState} from './serializeCloudAppSecurityState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCloudAppSecurityStateCollectionResponse(writer: SerializationWriter, cloudAppSecurityStateCollectionResponse: CloudAppSecurityStateCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, cloudAppSecurityStateCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", cloudAppSecurityStateCollectionResponse.value as any, serializeCloudAppSecurityState);
}
