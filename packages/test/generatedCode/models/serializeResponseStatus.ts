import {ResponseStatus} from './index';
import {ResponseType} from './responseType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResponseStatus(writer: SerializationWriter, responseStatus: ResponseStatus | undefined = {}) : void {
            writer.writeEnumValue<ResponseType>("response", responseStatus.response);
            writer.writeDateValue("time", responseStatus.time);
}
