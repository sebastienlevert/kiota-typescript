import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoUserFlowLanguagePage} from './deserializeIntoUserFlowLanguagePage';
import {UserFlowLanguageConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserFlowLanguageConfiguration(userFlowLanguageConfiguration: UserFlowLanguageConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userFlowLanguageConfiguration),
        "defaultPages": n => { userFlowLanguageConfiguration.defaultPages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserFlowLanguagePage) as any ; },
        "displayName": n => { userFlowLanguageConfiguration.displayName = n.getStringValue() as any ; },
        "isEnabled": n => { userFlowLanguageConfiguration.isEnabled = n.getBooleanValue() as any ; },
        "overridesPages": n => { userFlowLanguageConfiguration.overridesPages = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserFlowLanguagePage) as any ; },
    }
}
