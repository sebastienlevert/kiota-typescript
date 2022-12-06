import {serializeBaseDeltaFunctionResponse} from '../../../../../models/serializeBaseDeltaFunctionResponse';
import {serializeTodoTaskList} from '../../../../../models/serializeTodoTaskList';
import {DeltaResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaResponse(writer: SerializationWriter, deltaResponse: DeltaResponse | undefined = {}) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deltaResponse.value as any, serializeTodoTaskList);
}
