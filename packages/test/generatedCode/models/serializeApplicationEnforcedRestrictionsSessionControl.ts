import {ApplicationEnforcedRestrictionsSessionControl} from './index';
import {serializeConditionalAccessSessionControl} from './serializeConditionalAccessSessionControl';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplicationEnforcedRestrictionsSessionControl(writer: SerializationWriter, applicationEnforcedRestrictionsSessionControl: ApplicationEnforcedRestrictionsSessionControl | undefined = {}) : void {
        serializeConditionalAccessSessionControl(writer, applicationEnforcedRestrictionsSessionControl)
}
