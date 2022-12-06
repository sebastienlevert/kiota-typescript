import {ConditionalAccessGrantControl} from './conditionalAccessGrantControl';
import {ConditionalAccessGrantControls} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessGrantControls(conditionalAccessGrantControls: ConditionalAccessGrantControls | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "builtInControls": n => { conditionalAccessGrantControls.builtInControls = n.getEnumValues<ConditionalAccessGrantControl>(ConditionalAccessGrantControl) as any ; },
        "customAuthenticationFactors": n => { conditionalAccessGrantControls.customAuthenticationFactors = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "@odata.type": n => { conditionalAccessGrantControls.odataType = n.getStringValue() as any ; },
        "operator": n => { conditionalAccessGrantControls.operator = n.getStringValue() as any ; },
        "termsOfUse": n => { conditionalAccessGrantControls.termsOfUse = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
