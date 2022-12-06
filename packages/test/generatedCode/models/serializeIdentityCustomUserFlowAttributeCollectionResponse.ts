import {IdentityCustomUserFlowAttributeCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeIdentityCustomUserFlowAttribute} from './serializeIdentityCustomUserFlowAttribute';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityCustomUserFlowAttributeCollectionResponse(writer: SerializationWriter, identityCustomUserFlowAttributeCollectionResponse: IdentityCustomUserFlowAttributeCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, identityCustomUserFlowAttributeCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", identityCustomUserFlowAttributeCollectionResponse.value as any, serializeIdentityCustomUserFlowAttribute);
}
