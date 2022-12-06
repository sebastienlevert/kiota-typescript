import {deserializeIntoDictionary} from './deserializeIntoDictionary';
import {ResultTemplateDictionary} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoResultTemplateDictionary(resultTemplateDictionary: ResultTemplateDictionary | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDictionary(resultTemplateDictionary),
    }
}
