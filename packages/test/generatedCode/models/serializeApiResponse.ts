import {ApiResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApiResponse(writer: SerializationWriter, apiResponse: ApiResponse | undefined = {}) : void {
            writer.writeNumberValue("code", apiResponse.code);
            writer.writeStringValue("message", apiResponse.message);
            writer.writeStringValue("type", apiResponse.type);
}
