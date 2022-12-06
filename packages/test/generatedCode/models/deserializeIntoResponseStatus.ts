import {ResponseStatus} from './index';
import {ResponseType} from './responseType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResponseStatus(responseStatus: ResponseStatus | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { responseStatus.odataType = n.getStringValue() as any ; },
        "response": n => { responseStatus.response = n.getEnumValue<ResponseType>(ResponseType) as any ; },
        "time": n => { responseStatus.time = n.getDateValue() as any ; },
    }
}
