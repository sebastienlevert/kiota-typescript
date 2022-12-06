import {OnPremisesProvisioningErrorCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOnPremisesProvisioningError} from './serializeOnPremisesProvisioningError';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOnPremisesProvisioningErrorCollectionResponse(writer: SerializationWriter, onPremisesProvisioningErrorCollectionResponse: OnPremisesProvisioningErrorCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, onPremisesProvisioningErrorCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", onPremisesProvisioningErrorCollectionResponse.value as any, serializeOnPremisesProvisioningError);
}
