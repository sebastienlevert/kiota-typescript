import {AlertCollectionResponse} from './index';
import {serializeAlert} from './serializeAlert';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAlertCollectionResponse(writer: SerializationWriter, alertCollectionResponse: AlertCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, alertCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", alertCollectionResponse.value as any, serializeAlert);
}
