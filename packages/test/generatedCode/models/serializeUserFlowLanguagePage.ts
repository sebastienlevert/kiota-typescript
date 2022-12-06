import {UserFlowLanguagePage} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserFlowLanguagePage(writer: SerializationWriter, userFlowLanguagePage: UserFlowLanguagePage | undefined = {}) : void {
        serializeEntity(writer, userFlowLanguagePage)
}
