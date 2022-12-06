import {ProvisioningStepCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeProvisioningStep} from './serializeProvisioningStep';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeProvisioningStepCollectionResponse(writer: SerializationWriter, provisioningStepCollectionResponse: ProvisioningStepCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, provisioningStepCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", provisioningStepCollectionResponse.value as any, serializeProvisioningStep);
}
