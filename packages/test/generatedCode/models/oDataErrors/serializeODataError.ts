import {ODataError} from './index';
import {serializeMainError} from './serializeMainError';
import {AdditionalDataHolder, ApiError, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeODataError(writer: SerializationWriter, oDataError: ODataError | undefined = {}) : void {
            writer.writeObjectValueFromMethod("error_escaped", oDataError.error_escaped as any, serializeMainError);
}
