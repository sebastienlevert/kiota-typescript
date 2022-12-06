import {serializeBaseDeltaFunctionResponse} from '../../../../models/serializeBaseDeltaFunctionResponse';
import {serializeDriveItem} from '../../../../models/serializeDriveItem';
import {DeltaWithTokenResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDeltaWithTokenResponse(writer: SerializationWriter, deltaWithTokenResponse: DeltaWithTokenResponse | undefined = {}) : void {
        serializeBaseDeltaFunctionResponse(writer, deltaWithTokenResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", deltaWithTokenResponse.value as any, serializeDriveItem);
}
