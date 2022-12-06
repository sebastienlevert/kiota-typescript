import {serializeBaseDeltaFunctionResponse} from '../../../../../../../models/serializeBaseDeltaFunctionResponse';
import {serializeTodoTask} from '../../../../../../../models/serializeTodoTask';
import {DeltaResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {}) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deltaResponse.value as any, serializeTodoTask);
}
