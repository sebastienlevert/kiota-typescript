import {FreeBusyError} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFreeBusyError(freeBusyError: FreeBusyError | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "message": n => { freeBusyError.message = n.getStringValue() as any ; },
        "@odata.type": n => { freeBusyError.odataType = n.getStringValue() as any ; },
        "responseCode": n => { freeBusyError.responseCode = n.getStringValue() as any ; },
    }
}
