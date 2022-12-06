import {serializeActionResultPart} from '../../../../../../models/serializeActionResultPart';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {AddResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddResponse(writer: SerializationWriter, addResponse: AddResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, addResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", addResponse.value as any, serializeActionResultPart);
}
