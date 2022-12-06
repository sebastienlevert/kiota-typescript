import {ConditionalAccessGrantControl} from './conditionalAccessGrantControl';
import {ConditionalAccessGrantControls} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessGrantControls(writer: SerializationWriter, conditionalAccessGrantControls: ConditionalAccessGrantControls | undefined = {}) : void {
            writer.writeEnumValue<ConditionalAccessGrantControl>("builtInControls", conditionalAccessGrantControls.builtInControls);
            writer.writeCollectionOfPrimitiveValues<string>("customAuthenticationFactors", conditionalAccessGrantControls.customAuthenticationFactors);
            writer.writeStringValue("@odata.type", conditionalAccessGrantControls.odataType);
            writer.writeStringValue("operator", conditionalAccessGrantControls.operator);
            writer.writeCollectionOfPrimitiveValues<string>("termsOfUse", conditionalAccessGrantControls.termsOfUse);
}
