import {UserFlowLanguageConfiguration} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeUserFlowLanguagePage} from './serializeUserFlowLanguagePage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserFlowLanguageConfiguration(writer: SerializationWriter, userFlowLanguageConfiguration: UserFlowLanguageConfiguration | undefined = {}) : void {
        serializeEntity(writer, userFlowLanguageConfiguration)
            writer.writeCollectionOfObjectValuesFromMethod("defaultPages", userFlowLanguageConfiguration.defaultPages as any, serializeUserFlowLanguagePage);
            writer.writeStringValue("displayName", userFlowLanguageConfiguration.displayName);
            writer.writeBooleanValue("isEnabled", userFlowLanguageConfiguration.isEnabled);
            writer.writeCollectionOfObjectValuesFromMethod("overridesPages", userFlowLanguageConfiguration.overridesPages as any, serializeUserFlowLanguagePage);
}
