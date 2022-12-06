import {deserializeIntoEntity} from './deserializeIntoEntity';
import {UserFlowLanguagePage} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserFlowLanguagePage(userFlowLanguagePage: UserFlowLanguagePage | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userFlowLanguagePage),
    }
}
