import {TargetedManagedAppProtectionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTargetedManagedAppProtection} from './serializeTargetedManagedAppProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTargetedManagedAppProtectionCollectionResponse(writer: SerializationWriter, targetedManagedAppProtectionCollectionResponse: TargetedManagedAppProtectionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, targetedManagedAppProtectionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", targetedManagedAppProtectionCollectionResponse.value as any, serializeTargetedManagedAppProtection);
}
