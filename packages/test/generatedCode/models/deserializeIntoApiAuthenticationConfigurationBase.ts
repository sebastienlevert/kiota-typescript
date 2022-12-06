import {ApiAuthenticationConfigurationBase} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApiAuthenticationConfigurationBase(apiAuthenticationConfigurationBase: ApiAuthenticationConfigurationBase | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { apiAuthenticationConfigurationBase.odataType = n.getStringValue() as any ; },
    }
}
