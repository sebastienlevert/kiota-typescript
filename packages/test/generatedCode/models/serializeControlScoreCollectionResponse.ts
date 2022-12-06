import {ControlScoreCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeControlScore} from './serializeControlScore';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeControlScoreCollectionResponse(writer: SerializationWriter, controlScoreCollectionResponse: ControlScoreCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, controlScoreCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", controlScoreCollectionResponse.value as any, serializeControlScore);
}
