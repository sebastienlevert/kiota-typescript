import {TargetedManagedAppConfigurationCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTargetedManagedAppConfiguration} from './serializeTargetedManagedAppConfiguration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetedManagedAppConfigurationCollectionResponse(writer: SerializationWriter, targetedManagedAppConfigurationCollectionResponse: TargetedManagedAppConfigurationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, targetedManagedAppConfigurationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", targetedManagedAppConfigurationCollectionResponse.value as any, serializeTargetedManagedAppConfiguration);
}
