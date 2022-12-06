import {serializeBaseCollectionPaginationCountResponse} from '../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {serializeExtensionProperty} from '../../../../../models/serializeExtensionProperty';
import {GetAvailableExtensionPropertiesResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetAvailableExtensionPropertiesResponse(writer: SerializationWriter, getAvailableExtensionPropertiesResponse: GetAvailableExtensionPropertiesResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, getAvailableExtensionPropertiesResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", getAvailableExtensionPropertiesResponse.value as any, serializeExtensionProperty);
}
