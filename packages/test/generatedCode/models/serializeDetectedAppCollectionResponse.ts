import {DetectedAppCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeDetectedApp} from './serializeDetectedApp';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDetectedAppCollectionResponse(writer: SerializationWriter, detectedAppCollectionResponse: DetectedAppCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, detectedAppCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", detectedAppCollectionResponse.value as any, serializeDetectedApp);
}
