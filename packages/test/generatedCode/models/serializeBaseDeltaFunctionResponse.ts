import {BaseDeltaFunctionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBaseDeltaFunctionResponse(writer: SerializationWriter, baseDeltaFunctionResponse: BaseDeltaFunctionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.deltaLink", baseDeltaFunctionResponse.odataDeltaLink);
            writer.writeStringValue("@odata.nextLink", baseDeltaFunctionResponse.odataNextLink);
}
