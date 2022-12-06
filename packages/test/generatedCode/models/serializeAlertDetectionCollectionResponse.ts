import {AlertDetectionCollectionResponse} from './index';
import {serializeAlertDetection} from './serializeAlertDetection';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAlertDetectionCollectionResponse(writer: SerializationWriter, alertDetectionCollectionResponse: AlertDetectionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, alertDetectionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", alertDetectionCollectionResponse.value as any, serializeAlertDetection);
}
