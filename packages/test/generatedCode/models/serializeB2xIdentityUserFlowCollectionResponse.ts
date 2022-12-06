import {B2xIdentityUserFlowCollectionResponse} from './index';
import {serializeB2xIdentityUserFlow} from './serializeB2xIdentityUserFlow';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeB2xIdentityUserFlowCollectionResponse(writer: SerializationWriter, b2xIdentityUserFlowCollectionResponse: B2xIdentityUserFlowCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, b2xIdentityUserFlowCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", b2xIdentityUserFlowCollectionResponse.value as any, serializeB2xIdentityUserFlow);
}
