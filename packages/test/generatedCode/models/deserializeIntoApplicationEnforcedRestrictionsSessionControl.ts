import {deserializeIntoConditionalAccessSessionControl} from './deserializeIntoConditionalAccessSessionControl';
import {ApplicationEnforcedRestrictionsSessionControl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplicationEnforcedRestrictionsSessionControl(applicationEnforcedRestrictionsSessionControl: ApplicationEnforcedRestrictionsSessionControl | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoConditionalAccessSessionControl(applicationEnforcedRestrictionsSessionControl),
    }
}
